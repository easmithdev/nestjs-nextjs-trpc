export default () => ({
  nestPort: parseInt(process.env.NEST_PORT!) || 4000,
});
