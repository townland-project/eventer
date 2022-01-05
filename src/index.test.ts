//
import { EventCallbackResult, Eventer } from '.';
//
import { assert } from 'chai'

describe('eventer test', () => {
    let EVENT: string = 'ping'

    describe('remove event listener', () => {
        let eventer = new Eventer()

        let event = eventer.on(EVENT, () => { }) as EventCallbackResult

        it('event exist', () => {
            assert.equal(eventer.has(EVENT), true)
        })

        it('event not exist', () => {
            event.remove()

            assert.equal(eventer.has(EVENT), false)
        })
    })

    it('once event listener', (done) => {
        let eventer = new Eventer()

        eventer.once(EVENT, () => {
            done()
        })

        eventer.emit(EVENT)
    })

    it('on event listener', (done) => {
        let eventer = new Eventer()

        eventer.on(EVENT, () => {
            done()
        })

        eventer.emit(EVENT)
    })

    it('on event with stack listener', (done) => {
        let eventer = new Eventer()

        eventer.emit(EVENT)

        eventer.on(EVENT, () => {
            done()
        })
    })

    it('exists event listener', () => {
        let eventer = new Eventer()

        eventer.on(EVENT, () => { })

        assert.equal(eventer.has(EVENT), true)
    })

    it('not exists event listener', () => {
        let eventer = new Eventer()

        assert.equal(eventer.has(EVENT), false)
    })

    it('exists event stack', () => {
        let eventer = new Eventer()

        eventer.emit(EVENT)

        assert.equal(eventer.isStacked(EVENT), true)
    })

    it('not exists event stack', () => {
        let eventer = new Eventer()

        assert.equal(eventer.isStacked(EVENT), false)
    })
})