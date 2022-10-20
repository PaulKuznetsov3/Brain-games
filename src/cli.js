import readlineSync from 'readline-sync';
const nameDialog = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hallo, ' + `${userName}` + '!');
};
export default nameDialog;