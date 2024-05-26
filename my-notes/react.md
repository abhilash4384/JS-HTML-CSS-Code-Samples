# useState is async:

- if we have multiple setState(...) in a single function call one after another then the value will be of the first setState after the compltion of that function
- to avoid this we can pass arrow function and update the values in setState

# usePrevValue:

- we can create a custom hook to return the previous value of a state or prop

usePrevious(val) {
const ref = useRef();

```useEffect(() => {
ref.current = val
}, [val])

    return ref.current

}
```
