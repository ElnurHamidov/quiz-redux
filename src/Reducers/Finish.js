

export default function finish(state=false, action){
    switch(action.type){
        case 'finish':
            return true;
        case 'again':
            return false;
        default:
            return state;
    }
}