import { missionComm } from './comm.js';

let lastPayload = '';

const elements = {
    msgInput: document.getElementById('msg'),
    pressureInput: document.getElementById('pressure'),
    humidityInput: document.getElementById('humidity'),
    encodeBtn: document.getElementById('btn-encode'),
    frequencyBtn: document.getElementById('btn-frequency'),
    signBtn: document.getElementById('btn-sign'),
    output: document.getElementById('output')
};

const showOutput = (message) => {
    elements.output.textContent = message;
};

const handleEncode = () => {
    const message = elements.msgInput.value;
    
    if (!message.trim()) {
        showOutput('Error: El mensaje no puede estar vacío');
        return;
    }
    
    lastPayload = missionComm.codec.encode(message);
    showOutput(lastPayload);
};

const handleFrequency = () => {
    const pressure = elements.pressureInput.value;
    const humidity = elements.humidityInput.value;
    
    if (!pressure || !humidity || isNaN(pressure) || isNaN(humidity)) {
        showOutput('Error: Presión y humedad deben ser números');
        return;
    }
    
    missionComm.env.setPressure(parseFloat(pressure));
    missionComm.env.setHumidity(parseFloat(humidity));
    
    const frequency = missionComm.rf.calcFrequencyMHz();
    const formattedFrequency = missionComm.rf.formatCarrier(frequency);
    
    lastPayload = formattedFrequency;
    showOutput(`Frecuencia: ${formattedFrequency}`);
};

const handleSign = () => {
    if (!lastPayload) {
        showOutput('Error: Primero codifica un mensaje o calcula frecuencia');
        return;
    }
    
    const signedPayload = missionComm.codec.sign(lastPayload);
    lastPayload = signedPayload;
    showOutput(signedPayload);
};

elements.encodeBtn.addEventListener('click', handleEncode);
elements.frequencyBtn.addEventListener('click', handleFrequency);
elements.signBtn.addEventListener('click', handleSign);

console.log('Sistema de comunicaciones listo');import { missionComm } from './comm.js';

let lastPayload = '';

const elements = {
    msgInput: document.getElementById('msg'),
    pressureInput: document.getElementById('pressure'),
    humidityInput: document.getElementById('humidity'),
    encodeBtn: document.getElementById('btn-encode'),
    frequencyBtn: document.getElementById('btn-frequency'),
    signBtn: document.getElementById('btn-sign'),
    output: document.getElementById('output')
};

const showOutput = (message) => {
    elements.output.textContent = message;
};

const handleEncode = () => {
    const message = elements.msgInput.value;
    
    if (!message.trim()) {
        showOutput('Error: El mensaje no puede estar vacío');
        return;
    }
    
    lastPayload = missionComm.codec.encode(message);
    showOutput(lastPayload);
};

const handleFrequency = () => {
    const pressure = elements.pressureInput.value;
    const humidity = elements.humidityInput.value;
    
    if (!pressure || !humidity || isNaN(pressure) || isNaN(humidity)) {
        showOutput('Error: Presión y humedad deben ser números');
        return;
    }
    
    missionComm.env.setPressure(parseFloat(pressure));
    missionComm.env.setHumidity(parseFloat(humidity));
    
    const frequency = missionComm.rf.calcFrequencyMHz();
    const formattedFrequency = missionComm.rf.formatCarrier(frequency);
    
    lastPayload = formattedFrequency;
    showOutput(`Frecuencia: ${formattedFrequency}`);
};

const handleSign = () => {
    if (!lastPayload) {
        showOutput('Error: Primero codifica un mensaje o calcula frecuencia');
        return;
    }
    
    const signedPayload = missionComm.codec.sign(lastPayload);
    lastPayload = signedPayload;
    showOutput(signedPayload);
};

elements.encodeBtn.addEventListener('click', handleEncode);
elements.frequencyBtn.addEventListener('click', handleFrequency);
elements.signBtn.addEventListener('click', handleSign);

console.log('Sistema de comunicaciones listo');import { missionComm } from './comm.js';

let lastPayload = '';

const elements = {
    msgInput: document.getElementById('msg'),
    pressureInput: document.getElementById('pressure'),
    humidityInput: document.getElementById('humidity'),
    encodeBtn: document.getElementById('btn-encode'),
    frequencyBtn: document.getElementById('btn-frequency'),
    signBtn: document.getElementById('btn-sign'),
    output: document.getElementById('output')
};

const showOutput = (message) => {
    elements.output.textContent = message;
};

const handleEncode = () => {
    const message = elements.msgInput.value;
    
    if (!message.trim()) {
        showOutput('Error: El mensaje no puede estar vacío');
        return;
    }
    
    lastPayload = missionComm.codec.encode(message);
    showOutput(lastPayload);
};

const handleFrequency = () => {
    const pressure = elements.pressureInput.value;
    const humidity = elements.humidityInput.value;
    
    if (!pressure || !humidity || isNaN(pressure) || isNaN(humidity)) {
        showOutput('Error: Presión y humedad deben ser números');
        return;
    }
    
    missionComm.env.setPressure(parseFloat(pressure));
    missionComm.env.setHumidity(parseFloat(humidity));
    
    const frequency = missionComm.rf.calcFrequencyMHz();
    const formattedFrequency = missionComm.rf.formatCarrier(frequency);
    
    lastPayload = formattedFrequency;
    showOutput(`Frecuencia: ${formattedFrequency}`);
};

const handleSign = () => {
    if (!lastPayload) {
        showOutput('Error: Primero codifica un mensaje o calcula frecuencia');
        return;
    }
    
    const signedPayload = missionComm.codec.sign(lastPayload);
    lastPayload = signedPayload;
    showOutput(signedPayload);
};

elements.encodeBtn.addEventListener('click', handleEncode);
elements.frequencyBtn.addEventListener('click', handleFrequency);
elements.signBtn.addEventListener('click', handleSign);

console.log('Sistema de comunicaciones listo');import { missionComm } from './comm.js';

let lastPayload = '';

const elements = {
    msgInput: document.getElementById('msg'),
    pressureInput: document.getElementById('pressure'),
    humidityInput: document.getElementById('humidity'),
    encodeBtn: document.getElementById('btn-encode'),
    frequencyBtn: document.getElementById('btn-frequency'),
    signBtn: document.getElementById('btn-sign'),
    output: document.getElementById('output')
};

const showOutput = (message) => {
    elements.output.textContent = message;
};

const handleEncode = () => {
    const message = elements.msgInput.value;
    
    if (!message.trim()) {
        showOutput('Error: El mensaje no puede estar vacío');
        return;
    }
    
    lastPayload = missionComm.codec.encode(message);
    showOutput(lastPayload);
};

const handleFrequency = () => {
    const pressure = elements.pressureInput.value;
    const humidity = elements.humidityInput.value;
    
    if (!pressure || !humidity || isNaN(pressure) || isNaN(humidity)) {
        showOutput('Error: Presión y humedad deben ser números');
        return;
    }
    
    missionComm.env.setPressure(parseFloat(pressure));
    missionComm.env.setHumidity(parseFloat(humidity));
    
    const frequency = missionComm.rf.calcFrequencyMHz();
    const formattedFrequency = missionComm.rf.formatCarrier(frequency);
    
    lastPayload = formattedFrequency;
    showOutput(`Frecuencia: ${formattedFrequency}`);
};

const handleSign = () => {
    if (!lastPayload) {
        showOutput('Error: Primero codifica un mensaje o calcula frecuencia');
        return;
    }
    
    const signedPayload = missionComm.codec.sign(lastPayload);
    lastPayload = signedPayload;
    showOutput(signedPayload);
};

elements.encodeBtn.addEventListener('click', handleEncode);
elements.frequencyBtn.addEventListener('click', handleFrequency);
elements.signBtn.addEventListener('click', handleSign);

console.log('Sistema de comunicaciones listo');import { missionComm } from './comm.js';

let lastPayload = '';

const elements = {
    msgInput: document.getElementById('msg'),
    pressureInput: document.getElementById('pressure'),
    humidityInput: document.getElementById('humidity'),
    encodeBtn: document.getElementById('btn-encode'),
    frequencyBtn: document.getElementById('btn-frequency'),
    signBtn: document.getElementById('btn-sign'),
    output: document.getElementById('output')
};

const showOutput = (message) => {
    elements.output.textContent = message;
};

const handleEncode = () => {
    const message = elements.msgInput.value;
    
    if (!message.trim()) {
        showOutput('Error: El mensaje no puede estar vacío');
        return;
    }
    
    lastPayload = missionComm.codec.encode(message);
    showOutput(lastPayload);
};

const handleFrequency = () => {
    const pressure = elements.pressureInput.value;
    const humidity = elements.humidityInput.value;
    
    if (!pressure || !humidity || isNaN(pressure) || isNaN(humidity)) {
        showOutput('Error: Presión y humedad deben ser números');
        return;
    }
    
    missionComm.env.setPressure(parseFloat(pressure));
    missionComm.env.setHumidity(parseFloat(humidity));
    
    const frequency = missionComm.rf.calcFrequencyMHz();
    const formattedFrequency = missionComm.rf.formatCarrier(frequency);
    
    lastPayload = formattedFrequency;
    showOutput(`Frecuencia: ${formattedFrequency}`);
};

const handleSign = () => {
    if (!lastPayload) {
        showOutput('Error: Primero codifica un mensaje o calcula frecuencia');
        return;
    }
    
    const signedPayload = missionComm.codec.sign(lastPayload);
    lastPayload = signedPayload;
    showOutput(signedPayload);
};

elements.encodeBtn.addEventListener('click', handleEncode);
elements.frequencyBtn.addEventListener('click', handleFrequency);
elements.signBtn.addEventListener('click', handleSign);

console.log('Sistema de comunicaciones listo');import { missionComm } from './comm.js';

let lastPayload = '';

const elements = {
    msgInput: document.getElementById('msg'),
    pressureInput: document.getElementById('pressure'),
    humidityInput: document.getElementById('humidity'),
    encodeBtn: document.getElementById('btn-encode'),
    frequencyBtn: document.getElementById('btn-frequency'),
    signBtn: document.getElementById('btn-sign'),
    output: document.getElementById('output')
};

const showOutput = (message) => {
    elements.output.textContent = message;
};

const handleEncode = () => {
    const message = elements.msgInput.value;
    
    if (!message.trim()) {
        showOutput('Error: El mensaje no puede estar vacío');
        return;
    }
    
    lastPayload = missionComm.codec.encode(message);
    showOutput(lastPayload);
};

const handleFrequency = () => {
    const pressure = elements.pressureInput.value;
    const humidity = elements.humidityInput.value;
    
    if (!pressure || !humidity || isNaN(pressure) || isNaN(humidity)) {
        showOutput('Error: Presión y humedad deben ser números');
        return;
    }
    
    missionComm.env.setPressure(parseFloat(pressure));
    missionComm.env.setHumidity(parseFloat(humidity));
    
    const frequency = missionComm.rf.calcFrequencyMHz();
    const formattedFrequency = missionComm.rf.formatCarrier(frequency);
    
    lastPayload = formattedFrequency;
    showOutput(`Frecuencia: ${formattedFrequency}`);
};

const handleSign = () => {
    if (!lastPayload) {
        showOutput('Error: Primero codifica un mensaje o calcula frecuencia');
        return;
    }
    
    const signedPayload = missionComm.codec.sign(lastPayload);
    lastPayload = signedPayload;
    showOutput(signedPayload);
};

elements.encodeBtn.addEventListener('click', handleEncode);
elements.frequencyBtn.addEventListener('click', handleFrequency);
elements.signBtn.addEventListener('click', handleSign);

console.log('Sistema de comunicaciones listo');import { missionComm } from './comm.js';

let lastPayload = '';

const elements = {
    msgInput: document.getElementById('msg'),
    pressureInput: document.getElementById('pressure'),
    humidityInput: document.getElementById('humidity'),
    encodeBtn: document.getElementById('btn-encode'),
    frequencyBtn: document.getElementById('btn-frequency'),
    signBtn: document.getElementById('btn-sign'),
    output: document.getElementById('output')
};

const showOutput = (message) => {
    elements.output.textContent = message;
};

const handleEncode = () => {
    const message = elements.msgInput.value;
    
    if (!message.trim()) {
        showOutput('Error: El mensaje no puede estar vacío');
        return;
    }
    
    lastPayload = missionComm.codec.encode(message);
    showOutput(lastPayload);
};

const handleFrequency = () => {
    const pressure = elements.pressureInput.value;
    const humidity = elements.humidityInput.value;
    
    if (!pressure || !humidity || isNaN(pressure) || isNaN(humidity)) {
        showOutput('Error: Presión y humedad deben ser números');
        return;
    }
    
    missionComm.env.setPressure(parseFloat(pressure));
    missionComm.env.setHumidity(parseFloat(humidity));
    
    const frequency = missionComm.rf.calcFrequencyMHz();
    const formattedFrequency = missionComm.rf.formatCarrier(frequency);
    
    lastPayload = formattedFrequency;
    showOutput(`Frecuencia: ${formattedFrequency}`);
};

const handleSign = () => {
    if (!lastPayload) {
        showOutput('Error: Primero codifica un mensaje o calcula frecuencia');
        return;
    }
    
    const signedPayload = missionComm.codec.sign(lastPayload);
    lastPayload = signedPayload;
    showOutput(signedPayload);
};

elements.encodeBtn.addEventListener('click', handleEncode);
elements.frequencyBtn.addEventListener('click', handleFrequency);
elements.signBtn.addEventListener('click', handleSign);

console.log('Sistema de comunicaciones listo');import { missionComm } from './comm.js';

let lastPayload = '';

const elements = {
    msgInput: document.getElementById('msg'),
    pressureInput: document.getElementById('pressure'),
    humidityInput: document.getElementById('humidity'),
    encodeBtn: document.getElementById('btn-encode'),
    frequencyBtn: document.getElementById('btn-frequency'),
    signBtn: document.getElementById('btn-sign'),
    output: document.getElementById('output')
};

const showOutput = (message) => {
    elements.output.textContent = message;
};

const handleEncode = () => {
    const message = elements.msgInput.value;
    
    if (!message.trim()) {
        showOutput('Error: El mensaje no puede estar vacío');
        return;
    }
    
    lastPayload = missionComm.codec.encode(message);
    showOutput(lastPayload);
};

const handleFrequency = () => {
    const pressure = elements.pressureInput.value;
    const humidity = elements.humidityInput.value;
    
    if (!pressure || !humidity || isNaN(pressure) || isNaN(humidity)) {
        showOutput('Error: Presión y humedad deben ser números');
        return;
    }
    
    missionComm.env.setPressure(parseFloat(pressure));
    missionComm.env.setHumidity(parseFloat(humidity));
    
    const frequency = missionComm.rf.calcFrequencyMHz();
    const formattedFrequency = missionComm.rf.formatCarrier(frequency);
    
    lastPayload = formattedFrequency;
    showOutput(`Frecuencia: ${formattedFrequency}`);
};

const handleSign = () => {
    if (!lastPayload) {
        showOutput('Error: Primero codifica un mensaje o calcula frecuencia');
        return;
    }
    
    const signedPayload = missionComm.codec.sign(lastPayload);
    lastPayload = signedPayload;
    showOutput(signedPayload);
};

elements.encodeBtn.addEventListener('click', handleEncode);
elements.frequencyBtn.addEventListener('click', handleFrequency);
elements.signBtn.addEventListener('click', handleSign);

console.log('Sistema de comunicaciones listo');