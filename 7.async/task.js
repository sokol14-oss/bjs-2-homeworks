class AlarmClock {
    constructor(alarmCollection, timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, id) {
        if (id === false) {
            throw new Error('Нужен Id');
        }
        if (this.addClock.id === id) {
            try {
                this.addClock.id === id;
            } catch (err) {
                console.error('Такой Id уже существует');
            }
            this.alarmCollection.push({ id: this.id, callback: this.callback, time: this.time })
        }
    }
    removeClock(id) {
        let alarmCollection1 = this.alarmCollection;
        let alarmCollection2 = this.alarmCollection.filter((item) => item === id);
        return alarmCollection1.length === alarmCollection2.length;
    }
    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    start() {
        if (this.start === true) {
            return;
        }
        setInterval(this.alarmCollection.forEach(time)=> {
            this.addClock.time === this.getCurrentFormattedTime;
            return this.callback();
        })

    }
    stop() {
        if (this.addClock.id === true) {
            clearInterval(this.timerId);
        }
        this.timerId === null;
    }
    printAlarms() {
        return this.alarmCollection.forEach((item) => this.item.id + this.item.time);
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

let phoneAlarm = new AlarmClock();
phoneAlarm.addClock("09:000", () => console.log("Вставай"), 1);