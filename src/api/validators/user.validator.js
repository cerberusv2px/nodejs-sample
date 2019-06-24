/* eslint-disable prettier/prettier */
import Joi from 'joi';
import validate from '../../utils/validate';
import { authorService } from '../services';

const SCHEMA = {
  first_name: Joi.string().label('first_name').max(50).required(),
  last_name: Joi.string().label('first_name').max(50).required(),
  phone_number: Joi.string().label('phone_number').max(10).required()
};

export function authorValidator(req, res, next) {
  return validate(req.body, SCHEMA)
    .then(() => next())
    .catch(err => next(err));
}

export function findAuthor(req, res, next) {
  return authorService
    .getUser(req.params.id)
    .then(() => next())
    .catch(err => next(err));
}
