//import * as actions from '../actions/authActions';

const initialize = {
	authUser : false,
	userData : null,
	fleets  : null,
	fcmToken : null,
	validate: null,
	formValues: null,
	req_id: null,
	flowId: true,
	user_profile: null,
	system_profile:null,
	consignor_data: null,
	edit_req_id:null ,
	edit_line_id: null,
	line_id: null,
	invitee: false,
	lines: null,
	EditformValues: null,
	edit_lines: null,
	current_req_id : null,
	current_parent_id : null,
	parent_req_id: null,
	second_req_id:null,
	req_no: null,
	close:true,
	supplier:[],
	prev_lines:null,
	supp:[]
}

export default function testReducer(state = initialize, action){
	//console.log("this is action", action);
	switch(action.type){
		case 'AUTHENTICATED':
			return {
				...state,
				userData: action.response,
				authUser: true,
			};
		case 'AUTHENTICATION_FAILED':
			return {
				...state,
				authUser: false,
			};
		case 'FLEET_DATA':
			return {
				...state,
				fleets: action.response
			};
		case 'FLEET_FAILED':
			return {
				...state,
				fleets: null,
			};
		case 'SET_FCM_TOKEN':
	      return {
	        ...state,
	        fcmToken: action.token
	      };
	    case 'SET_VALIDATE':
	      return {
	        ...state,
	        validate: action.check
	      };
	    case 'FORM_VALUES':
	      return {
	        ...state,
	        formValues: action.formValues
	      };
	    case 'FORM_VALUES':
	      return {
	        ...state,
	        formValues: action.result
	      };
		case 'FLOW_ID':
	      return {
	        ...state,
	        flowId: action.flowid
	      };
	    case 'REQ_ID':
	      return {
	        ...state,
	        req_id: action.id
	      };
	    case 'USER_PROFILE':
	      return {
	        ...state,
	        user_profile: action.formValues
	      };
	    case 'SYSTEM_PROFILE':
	      return {
	        ...state,
	        system_profile: action.info
	      };
	      	
	    case 'CONSIGNOR_DATA':
	      return {
	        ...state,
	        consignor_data: action.response
	      };
	    case 'LINE_ID':
	      return {
	        ...state,
	        line_id: action.response.result
	      };
	     case 'INVITEE':
	      return {
	        ...state,
	        invitee: action.value
	      };
	    case 'EDIT_REQ':
	      return {
	        ...state,
	        edit_req_id: action.req_id
	      };
	    case 'EDIT_LINE':
	      return {
	        ...state,
	        edit_line_id: action.line_id
	      };
	    case 'EDIT_FORM_VALUES':
	      return {
	        ...state,
	        EditformValues: action.formValues
	    };
	    case 'EDIT_LINES':
	      return {
	        ...state,
	        edit_lines: action.lines
	    };

     	case 'CURRENT_REQ_ID':
  		return {
    		...state,
    		current_req_id: action.req_id
      	};

      	case 'CURRENT_PARENT_ID':
  		return {
    		...state,
    		current_parent_id: action.parent_id
  		};
	    case 'PARENT_REQ_ID':
		return {
		...state,
			parent_req_id: action.req_id
		};
	    case 'REQ_NO':
	      return {
	        ...state,
	        req_no: action.no
	      };
	    case 'LINES':
	      return {
	        ...state,
	        lines: action.lines
	      };
	    case 'SECOND_REQ_ID':
	      return {
	        ...state,
	        second_req_id: action.req
	     };
	    case 'CLOSE':
	      return {
	        ...state,
	        close: action.value
	    };
	    case 'SUPPLIER':
	      return {
	        ...state,
	        supplier: action.supp
	     };
	    case 'PREV_LINES':
	      return {
	        ...state,
	        prev_lines: action.pre_lines
	     };
	    case 'SUPP':
	      return {
	        ...state,
	        supp: action.supp
	     };
		default:
    		return state;
	}
}
