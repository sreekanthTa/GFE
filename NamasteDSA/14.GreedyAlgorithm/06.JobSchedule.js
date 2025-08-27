class Solution {
  JobScheduling(Jobs) {
    // Sort jobs by profit in descending order
    const sortedJobs = Jobs.sort((a, b) => b[2] - a[2]);

    let jobCount = 0;
    let totalProfit = 0;

    // Find maximum deadline
    let MaxDeadLine = 0;
    for (let job of sortedJobs) {
      MaxDeadLine = Math.max(MaxDeadLine, job[1]);
    }

    // Initialize slots with -1
    let slots = new Array(MaxDeadLine).fill(-1);

    // Try to schedule each job
    for (let i = 0; i < sortedJobs.length; i++) {
      let jobID = sortedJobs[i][0];
      let deadline = sortedJobs[i][1];
      let profit = sortedJobs[i][2];

      // Try to find a slot (from deadline-1 backwards)
      for (let j = deadline - 1; j >= 0; j--) {
        if (slots[j] == -1) {
          slots[j] = jobID;
          totalProfit += profit;
          jobCount++;
          break; // important!
        }
      }
    }

    return [jobCount, totalProfit];
  }
}


// Job sequencing Problem


// 0

// 100
// Medium

// Given an 2D array Jobs of size Nx3, where Jobs[i][0] represents JobID , Jobs[i][1] represents Deadline , Jobs[i][2] represents Profit associated with that job. Each Job takes 1 unit of time to complete and only one job can be scheduled at a time.



// The profit associated with a job is earned only if it is completed by its deadline. Find the number of jobs and maximum profit.


// Examples:
// Input : Jobs = [ [1, 4, 20] , [2, 1, 10] , [3, 1, 40] , [4, 1, 30] ]

// Output : 2 60

// Explanation : Job with JobID 3 can be performed at time t=1 giving a profit of 40.

// Job with JobID 1 can be performed at time t=2 giving a profit of 20.

// No more jobs can be scheduled, So total Profit = 40 + 20 => 60.

// Total number of jobs completed are two, JobID 1, JobID 3.

// So answer is 2 60.