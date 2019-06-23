import {ADD_COMMENT} from './actions'
import {EDIT_COMMENT} from './actions'
import {REMOVE_COMMENT} from './actions'
import {THUMB_UP_COMMENT} from './actions'
import {THUMB_DOWN_COMMENT} from './actions'

const initialState = {
    comments: [
        {
            id: '12741danx1278',
            text: 'Nowy komentarz',
            votes: 0
        },
        {
            id: '12741danb1278',
            text: 'Stary komentarz',
            votes: 42
        }
    ],
	users: [
        {
            id: '121jk6d89h2d',
            firstName: 'Jan',
            lastName: 'Nowak',
            comments: ['12741danb1278']
        }
    ]
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                {
                    id: action.id,
                    text: action.text,
                    votes: 0
                }
                , ...state]
            });
			
		case EDIT_COMMENT:
			return state.map(comment => {
				if(comment.id === action.id) {
					return {...comment, text: action.text}
				};
				return comment;
			});
			
		case REMOVE_COMMENT:
			return Object.assign({}, state, {
				comments: state.comments.filter(comment => comment.id !== action.id)
			});
		
		case THUMB_UP_COMMENT:
			return state.map(comment => {
				if(comment.id === action.id) {
					return {...comment, votes: comment.votes + 1}
				};
				return comment;
			});
			
		case THUMB_DOWN_COMMENT:
			return state.map(comment => {
				if(comment.id === action.id) {
					return {...comment, votes: comment.votes - 1}
				}
				return comment;
			});
			
        default:
            return state;
    }
};