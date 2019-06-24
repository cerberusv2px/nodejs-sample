import bookshelf from '../../database/database';
import dbConst from '../../database/constants';

export default class Book extends bookshelf.Model {
  get tableName() {
    return dbConst.table_name.TBL_BOOKS;
  }

  get hasTimestamps() {
    return true;
  }
}
