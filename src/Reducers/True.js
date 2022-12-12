

export default function isTrue(state=0, action){
    switch(action.type){
        case 'true':
            return state + 1;
        default:
            return state;
    }
}