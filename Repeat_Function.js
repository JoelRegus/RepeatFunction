/*****************************************************************
 * Repeat Function
 *
 * Calls a function a set number of times.
 *
 * callback - Function to call
 * parameters - array of parameters for the callback
 * interval - milliseconds for the timer
 * max - number of times to invoke the callback
 * index - iterator variable [optional].
 * context - the context in which to apply the callback [optional]
 *****************************************************************/

function repeatFunction(callback, parameters, interval, max, index, context) {
    index = index || 0;
    context = context || this;

    if (index < max) {
        callback.apply(context, parameters);

        setTimeout(function(){
            repeatFunction(callback, parameters, interval, index + 1, max);
        }, interval);
    }

    return;
}
