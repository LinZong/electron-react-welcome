# electron-react-welcome

a react component that help you create native welcome screen.

## Install

```
npm i electron-react-welcome
```

# Props

## on

type:boolean

Trigger this component enable or not.

## last

type:number default:2000(ms)

It defines how long to keep current image on the screen after fully fade-in.

## styles

type:object

It feeds some user-defined styles to the container of transition and the image holder.

example:
``` 
const styles = {
  container:{backgroundColor:"white"},
  transition:{zIndex:1002},
  screen:{transform:"scale(0.6)"}
}
```

## timeout

type:number

It can control the period of time for its fade-in and out.

## ScreenArray

type:array

All the image url you want to show through this component.

example:

```
const arrays = ["http://example.com/Miku.png"];
```

## timeBetweenScreen

type:number

Time between the last one's fade-out and the next one's fade-in. During this period of time all the screen will be "black" (default) or other customized.

## Usage

```
import WelcomeScreen from 'electron-react-welcome';

render(){
  return(<div>
    <WelcomeScreen ScreenArray={["http://example.com/Miku.png","http://foo.bar/Rin.png}>
      {children}
    </WelcomeScreen>
  </div>)
}

```

