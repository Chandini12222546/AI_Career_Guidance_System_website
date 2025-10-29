export interface CareerResult {
  career: string;
  message: string;
}

export function predictCareer(skillLevel: number, interest: string): CareerResult {
  let career = 'Career Counselor';

  if (skillLevel >= 9 && interest === 'Coding') {
    career = 'Software Architect';
  } else if (skillLevel >= 8 && interest === 'Coding') {
    career = 'Full Stack Developer';
  } else if (skillLevel >= 7 && interest === 'AI / Machine Learning') {
    career = 'AI Engineer';
  } else if (skillLevel >= 8 && interest === 'AI / Machine Learning') {
    career = 'Machine Learning Scientist';
  } else if (skillLevel >= 6 && interest === 'Data Science') {
    career = 'Data Analyst';
  } else if (skillLevel >= 8 && interest === 'Data Science') {
    career = 'Data Scientist';
  } else if (skillLevel >= 7 && interest === 'Cybersecurity') {
    career = 'Security Analyst';
  } else if (skillLevel >= 8 && interest === 'Cybersecurity') {
    career = 'Cybersecurity Engineer';
  } else if (skillLevel >= 8 && interest === 'Cloud Computing') {
    career = 'Cloud Engineer';
  } else if (skillLevel >= 9 && interest === 'Cloud Computing') {
    career = 'Cloud Solutions Architect';
  } else if (skillLevel >= 5 && interest === 'Design') {
    career = 'Graphic Designer';
  } else if (skillLevel >= 8 && interest === 'Design') {
    career = 'UI/UX Designer';
  } else if (skillLevel >= 6 && interest === 'Teaching / Education') {
    career = 'Lecturer';
  } else if (skillLevel >= 9 && interest === 'Teaching / Education') {
    career = 'Educational Consultant';
  } else if (skillLevel >= 6 && interest === 'Management') {
    career = 'Project Manager';
  } else if (skillLevel >= 8 && interest === 'Management') {
    career = 'Product Manager';
  } else if (skillLevel >= 6 && interest === 'Finance') {
    career = 'Financial Analyst';
  } else if (skillLevel >= 8 && interest === 'Finance') {
    career = 'Investment Banker';
  } else if (skillLevel >= 5 && interest === 'Marketing') {
    career = 'Digital Marketer';
  } else if (skillLevel >= 8 && interest === 'Marketing') {
    career = 'Marketing Strategist';
  } else if (skillLevel >= 5 && interest === 'Communication') {
    career = 'Content Writer';
  } else if (skillLevel >= 8 && interest === 'Communication') {
    career = 'Public Relations Officer';
  } else if (skillLevel >= 7 && interest === 'Research') {
    career = 'Research Scientist';
  } else if (skillLevel >= 7 && interest === 'Networking') {
    career = 'Network Engineer';
  }

  const message = `Start your journey toward becoming a ${career} today!`;

  return { career, message };
}
