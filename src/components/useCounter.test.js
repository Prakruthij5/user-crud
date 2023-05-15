import { act, renderHook } from '@testing-library/react'
import useCounter from './useCounter'

describe("increment is being tested",()=>{
    it("increment ia adding 1 to count",()=>{
        const {result}=renderHook(useCounter);

        act(()=>{
            result.current.increment();
        })

        expect(result.current.count).toBe(1);
    })
})