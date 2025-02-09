import { describe, expect, it } from 'vitest';
import { useCountStore } from './countStore';

describe('Contador', () => {
  it('deve incrementar o contador', () => {
    useCountStore.getState().increment();
    expect(useCountStore.getState().count).toBe(1);
  });

  it('deve decrementar o contador', () => {
    useCountStore.getState().decrement();
    expect(useCountStore.getState().count).toBe(0);
  });
});
