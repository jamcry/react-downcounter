# React Downcounter
Downcounter is a simple React countdown timer.

## Component Hierarchy
The main component is ```<CountdownTimer />``` and it consists of two sub components: ```<CounterDisplay />``` which shows the remaining time, and ```<CounterControl />``` which renders timer buttons.

```
<CountdownTimer />
 |--- <CounterDisplay />
 |--- <CounterControl />
```


## Usage
Import CountdownTimer component in your project:
```
import CountdownTimer from "./CountdownTimer"
```

Place <CountdownTimer /> somewhere in your render method. You can specify seconds with seconds prop as follows:
```
...
render() {
  return(
    <CountdownTimer seconds="75"/>
  );
}
```
## Working Principle
It uses ```setInterval()``` method to decrement remaining seconds by one each second (i.e. 1000 ms).