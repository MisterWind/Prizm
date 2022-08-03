/**
 * Implements lazy initialization for getter or memoization of a function call similar to pure {@link: Pipe}.
 * Replaces getter with its calculated value upon first call or keeps track of last call arguments and returned
 * value for function, skipping calculation when arguments are strictly the same.
 *
 * @throws error if used not on getter or function
 *
 * CAUTION: `this` is not available inside such functions/getters, they must be pure.
 */
import {ZuiPureException} from "../exceptions";


export function zuiPure<T>(
  // eslint-disable-next-line @typescript-eslint/ban-types
  _target: object,
  propertyKey: string,
  {get, enumerable, value}: TypedPropertyDescriptor<T>,
): TypedPropertyDescriptor<T> {
  if (get) {
    return {
      enumerable,
      get(): T {
        const value = get.call(this);

        Object.defineProperty(this, propertyKey, {enumerable, value});

        return value;
      },
    };
  }

  if (typeof value !== 'function') {
    throw new ZuiPureException();
  }

  const original = value;

  return {
    enumerable,
    get: function (): T {
      let previousArgs: readonly unknown[] = [];
      let originalFnWasCalledLeastAtOnce = false;
      let pureValue: unknown;

      const patched = (...args: unknown[]): unknown => {
        const isPure =
          originalFnWasCalledLeastAtOnce &&
          previousArgs.length === args.length &&
          args.every((arg, index) => arg === previousArgs[index]);

        if (isPure) {
          return pureValue;
        }

        previousArgs = args;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        pureValue = original.apply(this, args);
        originalFnWasCalledLeastAtOnce = true;

        return pureValue;
      };

      Object.defineProperty(this, propertyKey, {value: patched});

      return patched as unknown as T;
    },
  };
}
