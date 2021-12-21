import { GET_QUESTIONS } from '~/constants/api';

import request from '../request';


export async function getQuestions(idCategory: number, difficulty: string) {
  const amount = 10;
  const type = 'multiple';

  try {
    const response = await request.get(GET_QUESTIONS,
      { amount: amount,
        category: idCategory,
        difficulty: difficulty,
        type: type });
    return response;
  } catch {
    return null;
  }
}
