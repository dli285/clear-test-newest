//@ts-nocheck
export default function Stack() {
    const items = []

    return {
        pick: () => items[items.length - 1],
        push: (item) => items.push(items),
        pop: () => items.pop(),
        length: () => items.length
    }
}