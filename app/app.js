export function foo() {
    return 'foo';
}

export function not_called() {
    return 'not called';
}

function unexported() {
    console.log('not called too');
}
