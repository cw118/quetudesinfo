<script>
  import SideNav from '../../../components/SideNav.svelte';
  import Pagination from '../../../components/Pagination.svelte';
	import Disclaimer from '../../../components/Disclaimer.svelte';
  import { WhatIsCegep } from '../../../sectionPages';

  const pages = WhatIsCegep, section = 'What is CEGEP', previous = WhatIsCegep[2].link, next = WhatIsCegep[4].link;

  const chapters = [
    {
      name: 'The R-Score',
      link: 'the-r-score',
    },
    {
      name: 'Standard Deviation',
      link: 'standard-deviation',
    },
    {
      name: 'The Z-Score',
      link: 'the-z-score',
    },
    {
      name: 'Understanding the R-Score Formula',
      link: 'understanding-the-r-score-formula',
    },
    {
      name: 'Summary, Analysis, and Takeaways',
      link: 'summary-analysis-and-takeaways',
    },
    {
      name: 'References',
      link: 'references',
    }
  ]
</script>

<svelte:head>
  <meta name="description" content="Learn about the R-Score and how it works" />
  <title>The R-Score | QUÉtudes-info</title>
</svelte:head>

<SideNav {chapters} {pages} />

<section>
  <Pagination {section} {previous} {next} />

  <div id={chapters[0].link}>
    <h2 class="lightblue-bg">{chapters[0].name}</h2>
    <p><strong>The R-Score</strong>, officially the <em>cote de rendement au collégial (CRC)</em>, is <strong>a number or score you receive for each course you take in CEGEP</strong>. It's used for <strong>university admissions in
    Quebec</strong> to <strong>assess your academic performance</strong>. An <strong>overall R-Score</strong> is also calculated, which is the weighted average of all
    individual R-Scores from each of your courses—the number of credits a course is worth determines the weight of each
    course when calculating the overall R-Score. The <em><a href="https://www.bci-qc.ca/en/therscore/" target="_blank">Bureau de coopération interuniversitaire (BCI)</a></em> is responsible for
    calculating R-Scores.</p>
    <p><strong>Why does the R-Score exist?</strong> According to the BCI, two correction factors are used in the R-Score formula so that not only the student's own academic
    performance in a course is taken into account, but also the group strength and dispersion (academic strength and performance of your classmates). This adjustment is
    particularly important when it comes to Quebec university admissions, since applicants attend various CEGEPs across the
    province, forcing universities to compare students who were evaluated based on different college grading systems. In a nutshell,
    the R-Score was devised as <strong>a way to rank students more fairly</strong>.</p>
    <p>Now, on to the math! The concept of the R-Score and its formula can be confusing, but in the end, it really boils down to basic statistics.
    To know how the R-Score works, you'll first want to understand standard deviation and z-scores.</p>
    <p><strong>First, here's some vocabulary you should know:</strong></p>
    <ul>
      <li><strong>Deviation</strong> = how far from normal, from a norm, something is</li>
      <li><strong>Data set</strong> = a collection of related values/data points (often numbers)</li>
      <li><strong>Data point</strong> = an element (usually a number) in a data set</li>
      <li><strong>Distribution</strong> = in statistics, distribution is the way in which something (usually data) is "spread out" or distributed</li>
      <li><strong>Bias</strong> = in statistics, bias indicates that data is <strong>skewed</strong>, or more spread out, in a certain direction (left/right)
        <ul class="inner">
          <li><strong>Left-skewed</strong>= more spread out on the left</li>
          <li><strong>Right-skewed</strong>= more spread out on the right</li>
        </ul>
        <div class="image-label">
          <p class="label">Left-skewed data example</p>
          <img class="xxsmall-img" src="/assets/whatiscegep/left-skewed.webp" alt="Uneven bar graph where bars tend to be lower on the left">
          <p class="citation">Graph from Mathisfun. Copyright by MathsIsFun, 2019.</p>
        </div>
      </li>
      <li><strong>Normal distribution</strong> = data that is distributed evenly around a central value, with no bias left to right. Data is considered <strong>normal</strong> or <strong>normally distributed</strong> when:
        <ul class="inner">
          <li>Mean = median = mode</li>
          <li>It's vertically symmetrical (50% of values less than the mean and 50% greater)</li>
          <li><em>A common example of normal distribution is called the <u>Bell Curve</u>:</em></li>
        </ul>
        <div class="image-label">
          <p class="label">Bell Curve diagram</p>
          <img class="xsmall-img" src="/assets/whatiscegep/bell-curve.svg"
              alt="Bar graph where the bar heights form a half-parabola opening downwards">
          <p class="citation">Diagram from Mathisfun. Copyright by MathsIsFun, 2019.</p>
        </div>
      </li>
      <li><strong>Mean</strong> = the average, calculated by taking the sum of all numbers and dividing that sum by the quantity of data points
        <ul class="inner">
          <li>To find the mean of 2, 3, 5, 10, we take the sum: 2 + 3 + 5 + 10 = 20, then divide that sum by the quantity of data
          points (here, we have 4 numbers/data points): 20 / 4 = <strong>5</strong></li>
        </ul>
      </li>
      <li><strong>Population</strong> = in statistics, a population is a collection of items (ie. a pool of individuals) under consideration, from which
      statistical samples may be drawn for a study</li>
    </ul>
    <Disclaimer>You can also read Marianopolis College's document on the R-Score, the main information source for this page, here: <a href="https://www.marianopolis.edu/wp-content/uploads/2019/09/R-Score-Winter-2018-new-formula.pdf" target="_blank">March 2018, New R-Score Formula</a></Disclaimer>
  </div>

  <div id={chapters[1].link}>
    <h2 class="yellow-bg">{chapters[1].name}</h2>
    <p><strong>Standard deviation</strong> is the <u>measure of how spread out numbers are</u>, and is represented by the symbol &#963; (lowercase Greek letter sigma). It gives us a way of knowing "what's normal". Now, the
    formula for standard deviation involves something called the <strong>variance</strong>, which we'll go ahead and define next.</p>
    <p>The definition of <strong>variance</strong> is the <u>average of squared differences from the mean</u>. There are three steps to calculating the variance:</p>
    <ol class="ol-blue">
      <li>Calculate the mean of the data set.</li>
      <li>For each data point: subtract the mean from the number <em>(even if the result is negative!)</em>, then square the result.</li>
      <li>Calculate the average of all squared differences (from step 2).</li>
    </ol>
    <p><strong>Here's an example with some people's heights:</strong></p>
    <p>For heights (standing, from head to toe) 157 cm, 160 cm, 172 cm, 165 cm and 181 cm, calculate the variance.</p>
    <ol>
      <li>Calculate the data set mean: 157 + 160 + 172 + 165 + 181 = 835, there are five data points so 835 / 5 = <strong>167</strong></li>
      <li>Calculate the squared mean differences:
        <ol class="inner ol-blue">
          <li>Subtract the mean from the number for each data point: 157 - 167 = <strong>-10</strong>, 160 - 167 = <strong>-7</strong>, 172 - 167 = <strong>5</strong>, 165 - 167 = <strong>-2</strong>, 181 - 167 = <strong>14</strong></li>
          <li>Square each mean difference: (-10)<sup>2</sup> = <strong>100</strong>, (-7)<sup>2</sup> = <strong>49</strong>, (5)<sup>2</sup> = <strong>25</strong>, (-2)<sup>2</sup> = <strong>4</strong>, (14)<sup>2</sup> = <strong>196</strong></li>
        </ol>
      </li>
      <li>Calculate the average of all squared differences: 100 + 49 + 25 + 4 + 196 = 374, there are five data points so 374 / 5 = <strong>74.8</strong></li>
    </ol>
    <p>&#8756; We can conclude that the variance of these heights is <strong>74.8</strong>.</p>
    <p>Now, to go from the variance to standard deviation is extremely simple. The definition of and formula for <u>standard deviation</u> is just the <u>square root of the variance</u>.</p>
    <p><strong>Let's calculate the standard deviation for the same data set:</strong></p>
    <ol class="ol-blue">
      <li>Calculate the square root of the variance: &#8730;74.8 = 8.648699324 &#8776; <strong>8.6</strong></li>
    </ol>
    <p>&#8756; The standard deviation of the heights is (approximately) <strong>8.6 cm</strong>.</p><hr>
    <p>As mentioned earlier, standard deviation provides us with a standard whereby we can identify what's normal, and what
    values are further away from that standard (smaller, larger, etc.)—but how does the calculated value translate to this?</p>
    <p>Since variance and standard deviation are calculated based on the mean, the "normal" data points are determined in
    relation to the data set's mean. We can consider the <strong>mean</strong> to be the "most normal value", then using the standard deviation, we can find the range of normal values. So you can
    almost think of standard deviation as a unit, designated by &#963;: in a <u>normal distribution</u> like the Bell Curve, <strong>values within 1 standard deviation of the mean</strong> are considered normal.</p>
    <p><strong>Let's find the "normal range" for our set of heights, where the <u>mean is 167</u> and the <u>standard deviation is 8.6</u>:</strong></p>
    <p class="full-indent text-blue">Any value <em>within</em> one standard deviation is normal, so we want to find a range where values that are <strong>one standard deviation <u>less</u></strong> than the mean are included, as well as values that are <strong>one standard deviation <u>greater</u></strong> than the mean.</p>
    <ol class="ol-indented ol-blue">
      <li>The lower bound/minimum value: 167 - 8.6 = <strong>158.4</strong></li>
      <li>The upper bound/maximum value: 167 + 8.6 = <strong>175.6</strong></li>
    </ol>
    <p>&#8756; We can conclude that for this data set, any value within the <strong>range of 158.4 - 175.6</strong> (that is, heights from 158.4 cm to 175.6 cm) is considered to be <strong>normal</strong>.</p><br>
    <p>In statistics, about <strong>68% of values</strong> in a normally distributed data set can be expected to be within plus-or-minus <u>one</u> standard deviation (&#177; 1&#963;), or within the
    "normal range". As shown in the diagram below, we expect about <strong>95% of values</strong> to be within <strong>plus-or-minus <u>two</u> standard deviations</strong> (&#177; 2&#963;), then that percentage becomes <strong>99.7%</strong> within <strong>plus-or-minus-<u>three</u> standard deviations</strong> (&#177; 3&#963;).</p>
    <p>This is what we call the <strong>Empirical Rule</strong>, or the <strong>68-95-99.7 rule</strong> (or even the <strong>95 rule</strong>, as 95% is very commonly used as an interval).</p>
    <p><em>Recall that lowercase sigma </em>&#963; <em>is the symbol for standard deviation.</em></p>
    <div class="image-label">
      <p class="label">Standard deviation diagram</p>
      <img class="small-img" src="/assets/whatiscegep/standard-deviation.webp" alt="Diagram showing the percentage of values within varying numbers of standard deviations">
      <p class="citation">Diagram by M. W. Toews, CC BY 2.5 licence</p>
    </div><hr>
    <p>Just one final detail before we move on: the calculations shown above are used for a <strong>population</strong>, meaning
    the data points we used were the only ones we were interested in. (We got heights from five people, and we only cared
    about the heights of those five people.)</p>
    <p>There's a small change when calculating variance and/or standard deviation for what's called a <strong>sample</strong>, a selection taken from a larger
    population. (We got heights from five people, and maybe we're using that data to represent a group of fifteen people or
    more.) However, since R-Score calculations likely use <strong>population data</strong> (data from all students concerned), we'll just focus on
    the calculations that were already presented and explained.</p>
    <p>If you want to read about calculating variance and/or standard deviation for a sample, check out this lesson on Mathisfun: <a href="https://www.mathsisfun.com/data/standard-deviation.html" target="_blank">Standard Deviation and Variance</a></p>
    <p class="sources"><a href="https://www.mathsisfun.com/data/standard-deviation.html">Mathisfun — Standard Deviation</a>, <a href="https://www.mathsisfun.com/data/standard-normal-distribution.html">Mathisfun — Normal Distribution</a>, <a href="https://online.stat.psu.edu/stat200/lesson/2/2.2/2.2.7">Penn State University — The Empirical Rule</a></p>
  </div>

  <div id={chapters[2].link}>
    <h2 class="lightblue-bg">{chapters[2].name}</h2>
    <p>A <strong>z-score</strong> measures, for a data point, <u>how many standard deviations above or below the mean</u> it is. Z-scores are also called <strong>standard scores</strong> in statistics.</p>
    <p>The formula for calculating a z-score is quite simple: you divide a data point's mean difference by the data set's
    standard deviation. It could be written like <strong>this:</strong> (data point - mean) / standard deviation = z-score</p>
    <p>Some key facts on z-scores:</p>
    <ul class="ul-blue">
      <li>If a data point has a <strong>positive z-score</strong> (greater than 0), it's <strong>above average</strong> (<em>above the mean</em>)</li>
      <li>If a data point has a <strong>negative z-score</strong> (less than 0), it's <strong>below average</strong> (<em>below the mean</em>)</li>
      <li>If a z-score is <strong>close to 0</strong>, the data point is <strong>close to average</strong> (<em>close to/approaching the mean</em>)</li>
      <li>Depending on the context, the general guideline is that <strong>z-scores above 3 or below -3 are considered unusual</strong>
        <ul class="inner">
          <li>Different people may use different ranges, such as &#177;2 or &#177;2.5</li>
          <li>In R-Score calculations, we'll see later on that the BCI uses two different cutoffs pertaining to z-score components</li>
        </ul>
      </li>
    </ul>
    <p><em>Why is it <strong>3 and -3</strong>?</em> Let's think back to the <strong>empirical rule</strong> with this diagram here:</p>
    <div class="image-label">
      <p class="label">Empirical rule histogram</p>
      <img class="xsmall-img" src="/assets/whatiscegep/empirical-rule.webp" alt="Histogram of approximately normal data set, labeled with percentages of values that fall within a number of standard deviations">
      <p class="citation">Diagram by Melikamp, CC BY-SA 4.0 licence</p>
    </div>
    <Disclaimer><em>The symbol </em>&#956; <em>is lowercase Greek letter "mu", which is statistical notation for the <strong>mean</strong>. Recall that a <u>z-score</u> is defined as <u>how many standard deviations above or below the <strong>mean</strong> a data point is</u>.</em></Disclaimer>
    <p>Notice and recall that <strong>between plus-or-minus-<u>three</u> standard deviations</strong> (&#177; 3&#963;), around <strong>99.7% of values</strong> in a normal data set can be expected to fall within that range. To rephrase, we can expect around 99.7% of values in a normally distributed
    data set to fall within three standard deviations of the mean.</p>
    <p>So, if we think about this in terms of the z-score, this means that <strong>data points with a z-score between 3 and -3 fall within the three standard deviation range</strong>—a z-score of 3 means a data point is 3 standard deviations above the mean, and a z-score of -3 means a data point is 3 standard deviations below the mean. To put it simply, data points with a z-score between 3 and -3 represent those <strong>99.7%</strong> of values mentioned earlier.</p>
    <p>We can thus conclude that it would be <strong>extremely rare and unusual for a data point to fall outside of this range</strong> (&#177; 3&#963;, or for z-scores, between 3 and -3), where we expect a mere <strong>0.3%</strong> of values to be.</p><hr>
    <p><strong>Let's practise calculating z-scores with a couple of random examples:</strong></p>
    <ol>
      <li>The grades on a French midterm at Eastwood High have a mean of 85 and a standard deviation of 4. If George scored 86 on
      the exam, what is the z-score for his exam grade?
        <p>First, considering the z-score formula, (data point - mean) / standard deviation, we see that <strong>data point = George's exam grade = 86</strong>, <strong>mean = 85</strong>, and <strong>standard deviation = 4</strong>. Let's substitute those values in:</p>
        <p><em>z</em> = (data point - mean) / standard deviation</p>
        <p><em>z</em> = (86 - 85) / 4</p>
        <p><em>z</em> = 1 / 4 = <strong>0.25</strong></p>
        <p class="text-blue">&#8756; George's <strong>z-score is 0.25</strong>, meaning his grade is <strong>a quarter of a standard deviation <u>above</u> the mean</strong>.</p>
      </li>
      <li>The grades on a history midterm at Eastwood High have a mean of 83 and a standard deviation of 2. George scored 79 on
      the exam. What is his z-score for the history midterm?
        <p><strong>Data point = George's exam grade = 79</strong>, <strong>mean = 83</strong>, <strong>standard deviation = 2</strong>. Let's substitute these into the formula:</p>
        <p><em>z</em> = (data point - mean) / standard deviation</p>
        <p><em>z</em> = (79 - 83) / 2</p>
        <p><em>z</em> = (-4) / 2 = <strong>-2</strong></p>
        <p class="text-blue">&#8756; George's <strong>z-score is -2</strong>, meaning his grade is <strong>a half of a standard deviation <u>below</u> the mean</strong>.</p>
      </li>
    </ol>
    <p>Want to practise calculating z-scores? Check out this Khan Academy exercise: <a href="https://www.khanacademy.org/math/statistics-probability/modeling-distributions-of-data/z-scores/e/z_scores_1" target="_blank">Calculating z-scores</a></p>
    <p class="sources">Sources: <a href="https://www.khanacademy.org/math/statistics-probability/modeling-distributions-of-data/z-scores/a/z-scores-review">Z-scores — Khan Academy</a></p>
  </div>

  <div id={chapters[3].link}>
    <h2 class="yellow-bg">{chapters[3].name}</h2>
    <p>Since March 2018, the BCI has used the following <strong>formula to calculate an R-Score in a single course</strong> (<em>recall that R-Scores are calculated for each of your college courses</em>):</p>
    <h4 class="text-blue"><em>R<sub>course</sub> = </em>(<em>Z </em>&#8901; <em>IDGZ</em> + <em>IFGZ</em> + 5) &#8901; 5</h4>
    <p><strong>Let's go over each component:</strong></p>
    <ul>
      <li><em><strong>Z</strong></em> = <strong>your z-score for the course</strong>
        <ul class="inner ul-blue">
          <li>(your course grade - the course mean) / the course standard deviation</li>
          <li>Notice that here, <strong>your course grade = the data point</strong> (in the z-score formula)</li>
        </ul>
      </li>
      <li><em><strong>IFGZ</strong></em> = <em>l'indicateur de la force du groupe</em> (the <u>third</u> component: we'll go over this first so that the IDGZ makes more sense)
        <ul class="inner ul-blue">
          <li>This component measures the so-called <strong>strength of the group</strong></li>
          <li>Students in the course are given <strong>high school z-scores</strong>, which are z-scores based on their academic performance in certain
          standardized (ministerial) high school courses</li>
          <li>The IFGZ is the <strong>average of these high school z-scores</strong> (the <strong>mean</strong>): (sum of student high school z-scores) / (number of z-scores)</li>
          <li>The IFGZ is <strong>capped between -2 and 2</strong></li>
        </ul>
      </li>
      <li><em><strong>IDGZ</strong></em> = <em>l'indicateur de la dispersion du groupe</em> (the <u>second</u> component)
        <ul class="inner ul-blue">
          <li>This measures the <strong>dispersion of the high school z-scores of you and your classmates</strong> for a course. In other words, the IDGZ
          is the <strong>standard deviation of high school z-scores</strong> of students part of the same course.</li>
          <li>The square root of the variance of high school z-scores</li>
          <li>Values of the IDGZ are <strong>capped between 0.5 and 1.5</strong></li>
        </ul>
      </li>
    </ul>
    <p class="full-indent"><strong>Here's a look at how the IDGZ <u>may</u> be calculated:</strong></p>
    <ol class="ol-indented">
      <li>Find the high school z-score mean, or the mean of all high school z-scores of students in the course.</li>
      <li>For each student's z-score, find the mean difference: subtract the mean from the student z-score (<em>student z-score - z-score mean</em>)</li>
      <li>Calculate the average of all squared differences from the previous step:
        <ol class="inner">
          <li>Square every mean difference: (<em>student z-score - z-score mean</em>)<sup>2</sup></li>
          <li>Add them all together, then divide that sum by the number of student z-scores used for the IDGZ. (<em>Recall that only IDGZ values between 0.5 and 1.5 are used later to calculate R-Scores.</em>)</li>
        </ol>
      </li>
    </ol>
    <ul>
      <li>The two <strong>5s</strong> (+ 5 and &#8901; 5) = <strong>"aesthetic"</strong> factors/components
        <ul class="inner">
          <li>The plus 5 and times 5 in the formula are essentially for "aesthetic purposes". <strong>They shift and scale the R-Score into a
          "nicer range"</strong>, which is around <strong>0-50</strong>.</li>
        </ul>
      </li>
    </ul>
    <p class="sources">Sources: <a href="https://www.marianopolis.edu/wp-content/uploads/2019/09/R-Score-Winter-2018-new-formula.pdf">Marianopolis College — New R-Score Formula</a>, <a href="https://www.bci-qc.ca/wp-content/uploads/2020/10/R_Score_what-it-is_what-it-does_BCI-September-2020.pdf">BCI — The R-Score</a></p>
  </div>

  <div id={chapters[4].link}>
    <h2 class="lightblue-bg">{chapters[4].name}</h2>
    <p>Now that we understand how the R-Score is calculated, how does it work and what does it actually do? Let's take another
    look at the formula, specifically the IDGZ component:</p>
    <h4 class="text-blue"><em>R<sub>course</sub> = </em>(<em>Z </em>&#8901; <em><strong>IDGZ</strong></em> + <em>IFGZ</em> + 5) &#8901; 5</h4>
    <ul>
      <li>The IDGZ (group dispersion) <strong>multiplies</strong> the college course z-score</li>
      <li>The formula adjusts, depending on the IDGZ value, the <strong>weight</strong> of:
        <ul class="inner">
          <li>Your performance in the course <em>(Z)</em></li>
          <li>The group strength <em>(IFGZ)</em></li>
        </ul>
      </li>
    </ul>
    <p><strong>For simplicity, let's disregard the two aesthetic 5s:</strong></p>
    <h4 class="text-blue"><em>R<sub>course</sub> = </em>(<em>Z </em>&#8901; <em><strong>IDGZ</strong></em> + <em>IFGZ</em>)</h4>
    <ul>
      <li>If the <strong>IDGZ &#60; 1</strong>, the value of (Z &#8901; IDGZ) <u>decreases</u>. Therefore, the <strong>weight/importance of your performance in the course is diminished</strong> relative to the group strength (IFGZ).
        <ul class="inner ul-blue">
          <li>What does it mean if the IDGZ &#60; 1? Since the IDGZ is the <strong>course group's z-score standard deviation</strong> and is <strong>limited to a range of 0.5 to 1.5</strong>, IDGZ &#60; 1 means that there's <strong>less spread/distribution</strong> in your course group.</li>
          <li>Less spread = the high school z-scores of your course group are all quite similar/close to each other and have a smaller
          range (the difference between the highest and lowest z-scores is smaller)</li>
          <li>(<em>Lower standard deviation = a set of data points are more closely grouped, are closer in value</em>)</li>
        </ul>
      </li>
      <li>If the <strong>IDGZ &#62; 1</strong>, the value of (Z &#8901; IDGZ) <u>increases</u>. Therefore, the <strong>weight/importance of your performance in the course
          is amplified</strong> (increased) relative to the group strength (IFGZ).
        <ul class="inner ul-blue">
          <li>What does it mean if the IDGZ &#62; 1? A higher standard deviation means that the data points in a data set are <strong>more spread
          out</strong>, and since the IDGZ is the group's dispersion/standard deviation, a <strong>higher IDGZ (&#62; 1) means that there's more spread</strong> in
          your course group.</li>
          <li>More spread = the high school z-scores of your course group vary quite a bit have a wider range (the difference between
          the highest and lowest z-scores of the group is larger)</li>
        </ul>
      </li>
      <li>Because the IDGZ is capped between 0.5 and 1.5, <strong>your performance in a course will always remain an important factor in R-Score
        calculation</strong>.</li>
    </ul>
    <br>
    <p class="text-blue"><strong>To summarize these points:</strong></p>
    <ul>
      <li>If the high school z-scores of a course group are <u>less spread out</u>, the importance of your own performance in the course
      is <u>diminished</u>.
        <ul class="inner">
            <li>The weight of the <strong>group strength</strong> thus <strong>amplifies</strong></li>
        </ul>
      </li>
      <li>If the high school z-scores of a course group are <u>more spread out</u>, the importance of your own performance in the course
      is <u>amplified</u>.
        <ul class="inner">
          <li>The weight of the <strong>group strength</strong> thus <strong>diminishes</strong></li>
        </ul>
      </li>
      <li><strong>In both cases, your own course results are an important factor!</strong></li>
      <li>In both cases, students may benefit from a strong course group ("high" group strength, which translates mathematically
        as a larger IFGZ value)</li>
    </ul>
    <hr>
    <p><strong>Now, let's go over how and where the R-Score is used, as well as some useful facts:</strong></p>
    <ul>
      <li>Individual R-Scores are calculated for <strong>each CEGEP course</strong>.
        <ul class="inner ul-blue">
          <li>Provided at least six students in the course group achieve a percentage grade of 50% or above (<em>if you do not receive an R-Score for a course, this condition was likely not met</em>)</li>
        </ul>
      </li>
      <li>An <strong>overall R-Score</strong> is calculated as the <strong>weighted average of all course R-Scores</strong> (the weight of each R-Score depends on
      the number of credits the course is worth).
        <ul class="inner ul-blue">
          <li>Failed courses count for less in your overall R-Score; that is, they are given less weight in the calculation of your
            overall R-Score.</li>
        </ul>
      </li>
      <li>R-Scores usually fall between <strong>15 and 40</strong>.</li>
      <li>A high R-Score is typically said to be 30 and above.
        <ul class="inner ul-blue">
          <li>Extremely competitive programs such as Law, Medicine, and Dentistry generally require an R-Score in this range</li>
        </ul>
      </li>
      <li>When calculating the IFGZ (average of high school z-scores), the following secondary school courses are taken into
      account:
        <ul class="inner ul-blue">
          <li>Secondary 4 History</li>
          <li>Secondary 4 Science</li>
          <li>Secondary 4 Math</li>
          <li>Secondary 5 Language of Instruction (English/Français)</li>
          <li>Secondary 5 Second Language (Français/English)</li>
        </ul>
      </li>
    </ul>
    <hr>
    <p>The R-Score is used by <strong>Quebec</strong> universities for <strong>admissions purposes in addition to other criteria</strong> (<em>admission essay, CV,
    interview, etc.</em>). R-Score cutoffs are often set for programs, and these cutoffs can be found on university websites
    (<em>note that cutoffs may vary from year to year!</em>). Here are some examples for <u>2023</u>:</p>
    <ul class="ul-blue">
      <li>McGill Finance: 28.30-29.6 overall, 28.3-30.0 core math/science, 26.0 English</li>
      <li>Concordia Art History: 19</li>
      <li>Concordia Computer Science: 28 overall, 26 math</li>
      <li>McGill Electrical Engineering: 29.8 overall, 29.8-30.0 math/science</li>
    </ul>
    <p class="sources">Sources: <a href="https://www.mcgill.ca/undergraduate-admissions/programs">McGill University</a>, <a href="https://www.concordia.ca/admissions/undergraduate/programs.html">Concordia University</a></p>
    <p>The R-Score is <strong>not</strong> the only admission criteria for university, and it is <strong>only considered by Quebec universities</strong>.</p><br>
    <Disclaimer>There are formulas with official statistics notation that weren't shown here for simplicity. The formulas are really
    just the fancy and standard way of representing the concepts and calculations explained on this page. You can learn
    about them here: <a href="https://www.mathsisfun.com/data/standard-deviation-formulas.html" target="_blank">Standard Deviation Formulas</a></Disclaimer>
  </div>

  <div id={chapters[5].link}>
    <h2 class="yellow-bg">{chapters[5].name}</h2>
    <p><strong>Here are the main R-Score documents referenced in this page.</strong></p>
    <p>Marianopolis College's document on the newer R-Score formula: <a href="https://www.marianopolis.edu/wp-content/uploads/2019/09/R-Score-Winter-2018-new-formula.pdf" target="_blank">March 2018, New R-Score Formula</a></p>
    <p>BCI (<em>Bureau de coopération interuniversitaire</em>), an FAQ on the R-Score from September 2020: <a href="https://www.bci-qc.ca/wp-content/uploads/2020/10/R_Score_Questions-Answers_BCI-September-2020.pdf" target="_blank">R-Score Questions and Answers</a></p>
    <p>In section 2 of the following document, you can find some tables demonstrating how students may be ranked differently
    using percentage grades, z-scores, and R-Scores: <a href="https://www.bci-qc.ca/wp-content/uploads/2020/10/R_Score_what-it-is_what-it-does_BCI-September-2020.pdf" target="_blank">The R-Score: What it is and What it Does</a></p>
    <p>To learn more about the R-Score (all documents) from BCI, the body responsible for its calculation, visit their site: <a href="https://www.bci-qc.ca/en/therscore/" target="_blank">https://www.bci-qc.ca/en/therscore/</a></p>
    <hr>
    <p><strong>Want to find out how to apply to CEGEP, or get some tips on choosing a college and program?</strong></p>
    <p><a href="/applyingtocegep" class="btn btn-primary">Applying to CEGEP</a></p>
    <p><strong>Looking to visit the official CEGEP sites, or looking for viewbooks, handbooks, and more?</strong></p>
    <p><a href="/cegep-links" class="btn btn-dark">CEGEP Links</a></p>
    <p><strong>Not sure where to go next?</strong></p>
    <p><a href="/faq" class="btn btn-info">Help</a> <em>or</em> <a href="/" class="btn btn-outline-info">QUÉtudes-info Home</a></p>
    <p><strong>Think CEGEP might not be for you?</strong> Continue to <strong><a href="/whatiscegep/alternativestocegep">Alternatives to CEGEP</a></strong>.</p>
  </div>

  <Pagination {section} {previous} {next} />
</section>