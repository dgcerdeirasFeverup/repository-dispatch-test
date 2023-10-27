const [landing] = process.argv.slice(2);
const formattedLanding = landing.toLowerCase();

console.log(`Landing name: ${formattedLanding}`)
console.log(`Landing cms: ${process.argv.slice(3)}`)