import { StyleSheet, Text, View, Button, TouchableOpacity, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import getInput from '../Redux/actions/inputAction'
import getInput from '../Redux/actions/inputAction'



export default function Question({ navigation }) {


    let questions = [
        {
            title: 'The "function" and " var" are known as:',
            options: [
                'Keywords',
                'Data types',
                'Declaration statements',
                'Prototypes',
            ],
            answer: 'Declaration statements',
        },
        {
            title: 'Which type of JavaScript language is',
            options: [
                'Object-Oriented',
                'Object-Based',
                'Assembly-language',
                'High-level',
            ],
            answer: 'Object-Based',
        },
        {
            title: 'Which one of the following is a ternary operator:',
            options: [
                ':',
                '?',
                '-',
                '+',
            ],
            answer: ':',
        },
        {
            title: 'Which of the following number object function returns the value of the number?',
            options: [
                'toString()',
                'valueOf()',
                'toLocaleString()',
                'toPrecision()',
            ],
            answer: 'valueOf()',
        },
        {
            title: 'In the JavaScript, which one of the following is not considered as an error:',
            options: [
                'Syntax error',
                'Missing of semicolons',
                'Division by zero',
                'Missing of Bracket',
            ],
            answer: 'Division by zero',
        },
        {
            title: 'Which of the following keywords is used to define a variable in Javascript?',
            options: [
                'var',
                'let',
                'Both A & B',
                'None of above',
            ],
            answer: 'Both A & B',
        },
        {
            title: 'How can a datatype be declared to be a constant type?',
            options: [
                'const',
                'var',
                'let',
                'constant',
            ],
            answer: 'const',
        },
        {
            title: 'What keyword is used to check whether a given property is valid or not?',
            options: [
                'is in',
                'lies',
                'in',
                'exsist',
            ],
            answer: 'in',
        },
        {
            title: 'Which function is used to serialize an object into a JSON string in Javascript?',
            options: [
                'parse()',
                'convert()',
                'stringify()',
                'None of the above',
            ],
            answer: 'stringify()',
        },
        {
            title: 'What keyword is used to declare an asynchronous function in Javascript?',
            options: [
                'async',
                'setInterval',
                'await',
                'None of the above',
            ],
            answer: 'async',
        }
    ]
    const [questionNo, setQuestionNo] = useState(0)
    const [question, setQuestion] = useState(1)
    const [input, setInput] = useState([])
    const [indexx, setIndex] = useState(5)
    const [item, setItem] = useState('')
    const [quizEnded, setQuizEnded] = useState(false)
    const dispatch = useDispatch()


    const nextQuestion = () => {

        if (questionNo < questions.length - 1) {
            if (!item) {
                alert('Please select an option')
            }
            if (item) {
                setQuestionNo(questionNo + 1)
                setQuestion(question + 1)
                setIndex(5)
            }
            setItem('')
        }
        else {
            if (!item) {
                alert('Please select an option')
            }
            else {
                setQuizEnded(true)
            }
        }


        if (questionNo < questions.length) {
            if (item) {
                setInput([...input, item])
            }
            // setItem('')
        }

    }


    const getData = (item, index) => {
        setIndex(index)
        setItem(item)

    }


    const submit = () => {
        dispatch(getInput(input))
        navigation.navigate("Result")
        setInput([])
        setQuestionNo(0)
        setItem('')
        setQuizEnded(false)
        setIndex(5)
        setQuestion(1)
    }


    return (
        <View style={styles.container}>

            <Text style={styles.heading}>JavaScript Quiz</Text>
            <View style={styles.questionbox}>
                <Text style={styles.questionno}>Question {question} out of {questions.length}</Text>
                <Text style={styles.question} >{questions[questionNo].title}</Text>
            </View>
            <View style={styles.answerbox}>
                <View style={styles.answer}>


                    <Text style={styles.select} >Select the correct option</Text>
                    {
                        questions[questionNo].options.map((item, index) => {
                            return <View style={styles.itembox} key={index}>
                                <TouchableOpacity style={styles.radiobox} onPress={() => getData(item, index)}>
                                    {index === indexx &&
                                        <TouchableOpacity style={styles.active}>
                                            <View style={styles.radio} >
                                            </View>
                                        </TouchableOpacity>
                                    }
                                </TouchableOpacity>
                                <Text key={index} style={styles.item} >{item}</Text>
                            </View>
                        })
                    }

                </View>
            </View>
            {
                quizEnded ?

                    <View style={styles.btnbox}>
                        <Pressable title='Submit' onPress={submit} style={styles.btn}>
                            <Text style={styles.txt} >Submit</Text>
                        </Pressable>
                    </View>

                    :
                    <View style={styles.btnbox}>
                        <Pressable onPress={nextQuestion} title='Next' style={styles.btn}>
                            <Text style={styles.txt}>Next</Text>
                        </Pressable>
                    </View>

            }



        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'flex-start',
        // justifyContent: 'center',
    },
    itembox: {
        display: 'flex',
        flexDirection: 'row'
    },
    radiobox: {
        height: 25,
        width: 25,
        borderColor: '#9D9C9C',
        borderWidth: 1,
        borderRadius: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    active: {
        height: 25,
        width: 25,
        borderColor: '#009688',
        borderWidth: 1,
        borderRadius: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    radio: {
        height: 19,
        width: 19,
        borderRadius: 50,
        backgroundColor: '#009688'

    },
    heading: {
        width: '100%',
        height: 60,
        backgroundColor: '#F99312',
        textAlign: 'center',
        lineHeight: 60,
        fontSize: 25,
        color: 'white'
    },
    questionbox: {
        marginTop: 20,
        display: 'flex',
        alignItems: 'center'
    },
    questionno: {
        backgroundColor: '#EBEBEB',
        width: '90%',
        height: 50,
        fontSize: 20,
        fontWeight: '500',
        paddingTop: 10,
        paddingLeft: 10,
    },
    question: {
        backgroundColor: '#EBEBEB',
        width: '90%',
        height: 50,
        // paddingTop: 10,
        paddingLeft: 10,
        fontSize: 15,
        fontWeight: '500',
        alignItems: 'center'
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
    select: {
        fontSize: 19,
        fontWeight: '500',
        backgroundColor: 'white',
        paddingBottom: 5
    },
    itembox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EBEBEB',
        marginBottom: 7,
        padding: 10
    },
    item: {
        paddingLeft: 10,
        fontSize: 15,
        fontWeight: '400'
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
        alignSelf: 'flex-end',
        backgroundColor: '#F99312',
        textAlign: 'center',
        fontSize: 17,
        color: 'white'
    }
});
