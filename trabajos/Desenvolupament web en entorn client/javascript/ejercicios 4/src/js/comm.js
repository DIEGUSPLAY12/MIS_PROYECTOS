// Módulo de comunicaciones para Marte
export const missionComm = {
    center: {
        name: "ESMC-Barcelona",
        key: "TERRA-042",
        
        buildSignature: () => {
            return `${missionComm.center.name}#${missionComm.center.key}`;
        }
    },
    
    env: {
        pressureKPa: 101.3,
        humidityPct: 50,
        
        setPressure: (kPa) => {
            missionComm.env.pressureKPa = kPa;
        },
        
        setHumidity: (pct) => {
            missionComm.env.humidityPct = pct;
        }
    },
    
    codec: {
        normalize: (msg) => {
            if (typeof msg !== 'string') return '';
            
            let normalized = msg.trim().toUpperCase();
            let result = '';
            let lastChar = '';
            
            for (let i = 0; i < normalized.length; i++) {
                const currentChar = normalized[i];
                
                if (currentChar !== ' ' || lastChar !== ' ') {
                    result += currentChar;
                }
                
                lastChar = currentChar;
            }
            
            return result;
        },
        
        encode: (msg) => {
            const normalizedMsg = missionComm.codec.normalize(msg);
            const msgLength = normalizedMsg.length;
            
            return `[ENCODED]${normalizedMsg}|LEN=${msgLength}`;
        },
        
        sign: (payload) => {
            const signature = missionComm.center.buildSignature();
            return `${payload}|SIG=${signature}`;
        }
    },
    
    rf: {
        calcFrequencyMHz: (pressureKPa = null, humidityPct = null) => {
            const pressure = (typeof pressureKPa === 'number' && !isNaN(pressureKPa)) 
                ? pressureKPa 
                : missionComm.env.pressureKPa;
            
            const humidity = (typeof humidityPct === 'number' && !isNaN(humidityPct)) 
                ? humidityPct 
                : missionComm.env.humidityPct;
            
            return 100 + (humidity * 0.1) - (pressure * 0.05);
        },
        
        formatCarrier: (frequency) => {
            return `${frequency.toFixed(2)} MHz`;
        }
    }
};