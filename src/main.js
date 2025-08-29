import { makeCounter } from './counter.js'
import { randomTip } from './utils.js'
import './styles.css'

const incBtn = document.getElementById('inc')
const resetBtn = document.getElementById('reset')
const countEl = document.getElementById('count')
const tipEl = document.getElementById('tip')

const counter = makeCounter()
countEl.textContent = String(counter.value())

incBtn.addEventListener('click', () => {
  countEl.textContent = String(counter.inc())
})

resetBtn.addEventListener('click', () => {
  counter.reset()
  countEl.textContent = String(counter.value())
})

tipEl.textContent = randomTip()
