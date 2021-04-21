import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, TextInput, Button } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  red: {
    color: 'red',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  }
})

// MARK: Button

export default class ButtonExample extends Component {
  _onPressbutton() {
    alert('You Tapped the button');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button 
            onPress={this._onPressbutton}
            title="Press Me"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressbutton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressbutton}
            title="This Looks Great"
          />
        </View>
      </View>
    )
  }
}

// MARK: Text Input
export class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 50}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}



// MARK: FlexDirection
export class FlexDirectionBasics extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection:'row'}}>
        <View style={{width:50, height:50, backgroundColor:'powderblue'}} />
        <View style={{width:100, height:100, backgroundColor:'skyblue'}} />
        <View style={{width:100, height:100, backgroundColor:'steelblue'}} />
      </View>
    )
  }
}

export class FlexDimensionsBasics extends Component {
  render() {
    return (
      <View style={{height: 300}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    )
  }
}

// MARK: Height and Width Exercise
export class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 200, height: 200, backgroundColor: 'steelblue'}} />
      </View>
    )
  }
}

// MARK: State Blink Exercise 
class Blink extends Component {

  intervalId = 0;

  componentDidMount(){
    // Toggle the state every second
    this.intervalId = setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  //state object
  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

export class BlinkApp extends Component {
  render() {
    return (
      <View style={{alignItems:'center', top:50}}>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
        <Text style={styles.red}>red</Text>
      </View>
    );
  }
}
// MARK: Text Exercise 
class Greetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    )
  }
}

export class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems:'center', top:50}}>
        <Greetings name='Rexxar' />
      </View>
    )
  }
}

// MARK: Image Exercise
export class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
    };
    return (
      <Image source={pic} style={{width:193, height: 110}}/>
    )
  }
}