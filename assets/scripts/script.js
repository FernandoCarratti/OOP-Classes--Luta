let log = new Log(document.querySelector('.log'));
let newFighter = new Sorcerer('Fernando');
let monster = new BigMonster();

const stage = new Stage(
    newFighter,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);


stage.start();
