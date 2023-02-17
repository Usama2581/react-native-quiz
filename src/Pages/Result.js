import { StyleSheet, Text, View, Pressable, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


const Result = ({ navigation }) => {

  let [score, setScore] = useState(0)
  let [isCorrect, setIsCorrect] = useState(1)

  const answers = ['Declaration statements', 'Object-Based', ':', 'valueOf()', 'Division by zero', 'Both A & B', 'const', 'in', 'stringify()', 'async']
  let input = []
  input = useSelector(state => state.inputReducer.input)



  useEffect(() => {
    let i = 0;
    while (i < input.length) {
      if (input[i] === answers[i]) {
        setScore(score += 10)
        // alert('')
      }
      i++
    }

  }, [])

  
  useEffect(() => {
    console.log(score)
  }, [score])



  return (

    <View style={styles.container}>
      <View style={styles.answerbox}>
        <View style={styles.answer}>
          <Text style={styles.score}>Your score : {score}</Text>
          <Text style={styles.heading}>Your given answers</Text>
          <Text style={styles.info}>*Tap on the wrong answer to view right answer</Text>
          {
            input.map((item, index) => {
              return <TouchableOpacity 
              style={[styles.true, { borderColor: item === answers[index] ? '#45AD39' : '#C52424' }]} 
              onPress={() => alert(answers[index])} >
                <Text style={styles.item}>{item}</Text>
                {
                  item === answers[index] ?
                    <Image source={require('../../assets/tick.png')} style={styles.img} />
                    :
                    <Image source={require('../../assets/cross.png')} style={styles.img} />
                }
              </TouchableOpacity>
            })
          }

        </View>
      </View>


      <View style={styles.btnbox}>
        <Pressable title='Next' style={styles.btn}
          onPress={() => navigation.navigate("Landing")} >
          <Text style={styles.txt}>Restart</Text>
        </Pressable>
      </View>


      {/* <Button onPress={() => navigation.navigate("Question")} title='Restart'></Button> */}
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    flex: 1,
    justifyContent: 'center'
  },
  score: {
    // textAlign: 'center',
    fontSize: 25,
    fontWeight: '500'
  },
  true: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EBEBEB',
    marginBottom: 7,
    padding: 10,
    borderWidth: 1
  },

  item: {
    // paddingLeft: 10,
    fontSize: 15,
    fontWeight: '400'
  },
  answerbox: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  answer: {
    width: '90%',
  },
  heading: {
    fontSize: 17,
    fontWeight: '600',
    paddingBottom: 10
  },
  btnbox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  btn: {
    width: '90%',
  },
  txt: {
    lineHeight: 50,
    width: 100,
    height: 50,
    alignSelf: 'center',
    backgroundColor: '#1e90ff',
    textAlign: 'center',
    fontSize: 17,
    color: 'white'
  },
  img: {
      position: 'absolute',
      right: 15,
      // paddingRight: -10
  },
  info: {
    color: 'crimson'
  }

})