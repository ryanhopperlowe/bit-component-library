import { renderHook, act } from '@testing-library/react-hooks';
import { useTest } from './use-test';

it('increment counter', () => {
  const { result } = renderHook(() => useTest())
  act(() => {
    result.current.increment()
  })
  expect(result.current.count).toBe(1)
})
