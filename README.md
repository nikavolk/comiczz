## Author

Nika Volk

## Failed to implement

None (I think)

## Issues faced

Not having used Typescript too often before, I've run across some issues
with typing data.

I also attempted implementing an infinite scroll using
useEffect and scroll, as well as the Intersection Observer, and ended up
settling on using the react-infinite-scroll library.

I was planning on using different branches on git first, however given
it's a smaller application, I decided to stay on the main branch and work
off it.

I'm also uncertain as to why there are duplicate entries when loading more
data, whether it's due to the API, or there is something wrong with how the
states and data have been handled.

Many comic entries are also missing much of different data (prices, dates, etc),
so I had to resort to showing "N/A" when data isn't provided.
