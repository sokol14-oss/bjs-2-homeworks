class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Нужен Id');
        }
        if (this.alarmCollection.some((item) => item.id === this.addClock.id)) {
            console.error("Ошибка");
        }
        this.alarmCollection.push({ time: time, callback: callback, id: id })
    }


    removeClock(id) {
        let alarmCollection1 = this.alarmCollection;
        this.alarmCollection = this.alarmCollection.filter((item) => item.id != id);
        if (alarmCollection1.length != this.alarmCollection.length) {
            return true
        }
    }
    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru", { hour: '2-digit', minute: '2-digit' });
    }
    start() {
        if (this.timerId) {
            return;
        }
        this.timerId = setInterval(check, 1000);
        const checklock(time) => {
            if (getCurrentFormattedTime() === this.alarmCollection.time) {
                return this.callback;
            }
            const check = this.alarmCollection.forEach(checklock);
        }

    }
    stop() {
        if (this.addClock.id === true) {
            clearInterval(this.timerId);
        }
        this.timerId = null;
    }
    printAlarms() {
        console.log(this.alarmCollection.forEach((item) => this.item.id + this.item.time));
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

let phoneAlarm = new AlarmClock();
phoneAlarm.addClock("09:000", () => console.log("Вставай"), 1);