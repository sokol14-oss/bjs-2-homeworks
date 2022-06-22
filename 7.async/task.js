class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Нужен Id');
        }
        if (this.alarmCollection.some((item) => item.id === id)) {
            console.error("Ошибка");
        }
        this.alarmCollection.push({ time, callback, id })
    }


    removeClock(id) {
        let alarmCollection1 = this.alarmCollection;
        this.alarmCollection = this.alarmCollection.filter((item) => item.id != id);
        return alarmCollection1.length != this.alarmCollection.length;
    }
    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru", { hour: '2-digit', minute: '2-digit' });
    }
    start() {
        if (this.timerId) {
            return;
        }
        this.timerId = setInterval(a, 1000);
        const a = () => this.alarmCollection.forEach(checkClock);
        const checkClock = (item) => {
            if (this.getCurrentFormattedTime() === item.time) {
                item.callback();
            }
        }

    }
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
        }
        this.timerId = null;
    }
    printAlarms() {
        this.alarmCollection.forEach((item) => console.log(item.id, item.time));
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

let phoneAlarm = new AlarmClock();
phoneAlarm.addClock("09:00", () => console.log("Вставай"), 1);
phoneAlarm.addClock("14:43", () => console.log("Вставай"), 2);