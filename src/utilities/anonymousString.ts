export function anonymousString(item: string) {
  let l = item.length;
  if (l > 4) {
    return item.slice(0, 2) + "*".repeat(l - 3) + item.slice(-1, l);
  } else {
    return;
  }
}
