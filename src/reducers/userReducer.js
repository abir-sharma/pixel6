import { createAction, createReducer } from "@reduxjs/toolkit";
const GET_USERS_REQUEST=createAction('GET_USERS_REQUEST')
const GET_USERS_SUCCESS=createAction('GET_USERS_SUCCESS')
const GET_USERS_FAIL=createAction('GET_USERS_FAIL')


export const userReducer=createReducer({
    users:{},
},(builder) => {
    builder
    .addCase(GET_USERS_REQUEST,(state,action) => {
          state.login=true
    })
    .addCase(GET_USERS_SUCCESS,(state,action) => {
        state.login=false
        state.users=action.payload
  })
  .addCase(GET_USERS_FAIL,(state,action) => {
          state.login=false
    })
}
    // GET_USERS_REQUEST:(state,action)=>{
    //     state.login=true
    // },
    // GET_USERS_SUCCESS:(state,action)=>{
    //     state.loading=false
    //     state.users=action.payload
    //  },
    // GET_USERS_FAIL:(state,action)=>{
    //     state.loading=false
    //     state.error=action.payload
    //  },
    // CLEAR_ERRORS:(state,action)=>{
    //      state.error=null
    // }

)