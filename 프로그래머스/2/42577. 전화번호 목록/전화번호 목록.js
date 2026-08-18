function solution(phone_book) {
    const endpoint = phone_book.length - 1;
    phone_book.sort((a, b) => a > b ? 1 : -1);
    for (let i=0; i < endpoint; i++) {
        if (phone_book[i] === phone_book[i + 1].slice(0, phone_book[i].length)) return false;
    }
    return true;
}