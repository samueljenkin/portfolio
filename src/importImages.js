// skillSet
import HTML5 from './images/skillSetLogos/HTML5.png'
import CSS from './images/skillSetLogos/CSS.png'
import JavaScript from './images/skillSetLogos/JavaScript.png'
import Python from './images/skillSetLogos/Python.png'
import PostgreSQL from './images/skillSetLogos/PostgreSQL.png'
import Node from './images/skillSetLogos/Node.png'
import React from './images/skillSetLogos/React.png'
import Flask from './images/skillSetLogos/Flask.png'
import GitHub from './images/skillSetLogos/GitHub.png'

// projectPreviews
import TicTacToe from './images/projectPreviews/Tic-Tac-Toe.png'
import CareerHive from './images/projectPreviews/CareerHive.png'
import BrainBusters from './images/projectPreviews/Brain_Busters.png'
import TripWise from './images/projectPreviews/TripWise.png'

// objects
const skillSet = { HTML5, CSS, JavaScript, PostgreSQL, Python, Node, React, Flask, GitHub }
const skillSetNames = Object.keys(skillSet)

const projectPreviews = { TicTacToe, CareerHive, BrainBusters, TripWise }

// export
export { skillSet, skillSetNames, projectPreviews }