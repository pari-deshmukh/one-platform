/**
 * A simplified fetch wrapper for GraphQL queries and mutations
 * @param {{query: string, variables: object}} body
 */
export default function FetchClient ( body ) {
  return fetch( window.UserGroup?.api, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${ window.OpAuthHelper?.jwtToken }`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify( body )
  } )
    .then(res => res.json())
    .then( res => {
      if ( res.errors ) {
        throw res.errors;
      }
      return res.data;
    } )
    ;
}
