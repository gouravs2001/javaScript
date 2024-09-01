/**How JS executes the code?
 * 1) Global execution context - A global execution context is made and 'this' variable is defined for that Global context.
 *                               Every environment has different global context browser has window object in it's global context nodejs have {}
 * types of execution contexts..
 * GLobal Execution  context
 * Function execution COntext
 * Eval Execution Context
 * 
 * 2) Memory creation phase / Creation pahse - variables are stored have undefined. Function have their defination.
 * 3) Execution phase = variables are assigned with declared values.🛑 For function a new execution environment + execution thread is created and
                        Memory Phase and Execution Phase is repeated in new sandbox environment. 
 *     and after execution execution environment is DELETED!!!! and function returns the value to parent context (generally global context)
 */
