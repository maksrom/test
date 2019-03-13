const StateMachine = require('javascript-state-machine');

export const stateMachine = new StateMachine(
    {
        init: 'begin',
        transitions: [
            { name: 'start', from: 'begin',  to: 'progress' },
            { name: 'stop',  from: 'progress', to: 'end'  },
            { name: 'reset', from: 'end', to: 'begin'    }
        ],
        methods: {
            onStart: () => { console.log('I start') },
            onStop:() => { console.log('I stop') },
            onReset:() => { console.log('I reset') }
        }
    }
);

