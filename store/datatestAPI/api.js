import axios from "axios"
const datatestAPI = axios.create({
  baseURL: "https://datatest-3.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return datatestAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_fghc_list(payload) {
  return datatestAPI.get(`/api/v1/fghc/`)
}
function api_v1_fghc_create(payload) {
  return datatestAPI.post(`/api/v1/fghc/`, payload)
}
function api_v1_fghc_retrieve(payload) {
  return datatestAPI.get(`/api/v1/fghc/${payload.id}/`)
}
function api_v1_fghc_update(payload) {
  return datatestAPI.put(`/api/v1/fghc/${payload.id}/`, payload)
}
function api_v1_fghc_partial_update(payload) {
  return datatestAPI.patch(`/api/v1/fghc/${payload.id}/`, payload)
}
function api_v1_fghc_destroy(payload) {
  return datatestAPI.delete(`/api/v1/fghc/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return datatestAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return datatestAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return datatestAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return datatestAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return datatestAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return datatestAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return datatestAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return datatestAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return datatestAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return datatestAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return datatestAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return datatestAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return datatestAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_fghc_list,
  api_v1_fghc_create,
  api_v1_fghc_retrieve,
  api_v1_fghc_update,
  api_v1_fghc_partial_update,
  api_v1_fghc_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
