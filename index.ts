interface Result {
  results: {
    id: number;
    name: string;
    job: string;
  }[];
}

const printJobs = (results: Result) => {
  results.results.forEach(({ job }) => {
    console.log(job);
  });
};

printJobs({
  results: [
    {
      id: 1,
      name: 'John',
      job: 'developer',
    },
  ],
});
