

export default function finish(state=false, action){
    switch(action.type){
        case 'finish':
            return true;
        default:
            return state;
    }
}