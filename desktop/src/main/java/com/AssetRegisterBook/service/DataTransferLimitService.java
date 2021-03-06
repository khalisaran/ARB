package com.AssetRegisterBook.service;

import java.util.ArrayList;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import org.apache.log4j.*;



import com.AssetRegisterBook.domain.core.DataTransferLimit;

import com.AssetRegisterBook.dao.couchbase.DataTransferLimitDao;



/**
 *
 * @author Geppetto Generated Code</br>
 * Date Created: </br>
 * @since  </br>
   build:   </p>
 *
 * code was generated by the Geppetto System </br>
 * Gepppetto system Copyright - Geppetto LLC 2014 - 2015</br>
 * The generated code is free to use by anyone</p>
 *
 *
 *
*/
@Service("DataTransferLimitService")
public class DataTransferLimitService   {
private static Logger log = Logger.getLogger(DataTransferLimitService.class.getName());

	private DataTransferLimitDao DataTransferLimit_dao;


	public DataTransferLimitDao get_DataTransferLimit_dao() {
		return DataTransferLimit_dao;
	}


	@Resource(name="DataTransferLimitDao")
	public void set_DataTransferLimit_dao(DataTransferLimitDao DataTransferLimit_dao) {
		this.DataTransferLimit_dao = DataTransferLimit_dao;
	}



	//auths not ready at this time

	/**
	*
	*The purpose of this service method is to perform save operation of  DataTransferLimit noun into database
	*@param DataTransferLimit
	*@param user
	*@return the_DataTransferLimit object will return
	*@throws Exception
	*/

	public DataTransferLimit create_datatransferlimit(DataTransferLimit DataTransferLimit) throws Exception {

 		  log.setLevel(Level.INFO);
	      log.info("create_datatransferlimit service operation started !");

		try{
			DataTransferLimit the_DataTransferLimit;

			the_DataTransferLimit = DataTransferLimit_dao.create_datatransferlimit(DataTransferLimit);

 			log.info(" Object returned from create_datatransferlimit  service method !");
			return the_DataTransferLimit;

		}catch(Exception e){

			System.out.println("ServiceException: " + e.toString());
			log.error("create_datatransferlimit service throws exception : "+ e.toString());

		}
		return null;



	}

	//auths not ready at this time

	/**
	*
	*The purpose of this service method is to perform update operation of  DataTransferLimit noun into database
	*@param DataTransferLimit
	*@param user
	*@return the_DataTransferLimit object will return
	*@throws Exception
	*/

	public DataTransferLimit update_datatransferlimit(DataTransferLimit DataTransferLimit) throws Exception {

 		  log.setLevel(Level.INFO);
	      log.info("update_datatransferlimit service operation started !");

		try{
			DataTransferLimit the_DataTransferLimit;

			the_DataTransferLimit = DataTransferLimit_dao.update_datatransferlimit(DataTransferLimit);

 			log.info(" Object returned from update_datatransferlimit  service method !");
			return the_DataTransferLimit;

		}catch(Exception e){

			System.out.println("ServiceException: " + e.toString());
			log.error("update_datatransferlimit service throws exception : "+ e.toString());

		}
		return null;



	}

	//auths not ready at this time

	/**
	*
	*The purpose of this service method is to perform fetch operation of  DataTransferLimit noun from  database based on given noun id
	*@param  id
	*@param user
	*@return the_DataTransferLimit object will return
	*@throws Exception
	*/

	public DataTransferLimit datatransferlimit_search_for_update(String id ) throws Exception {

 		  log.setLevel(Level.INFO);
	      log.info("datatransferlimit_search_for_update service operation started !");

		try{
			DataTransferLimit the_DataTransferLimit;

			the_DataTransferLimit = DataTransferLimit_dao.datatransferlimit_search_for_update(id);

 			log.info(" Object returned from datatransferlimit_search_for_update  service method !");
			return the_DataTransferLimit;

		}catch(Exception e){

			System.out.println("ServiceException: " + e.toString());
			log.error("datatransferlimit_search_for_update service throws exception : "+ e.toString());

		}
		return null;



	}

	//auths not ready at this time

	/**
	*
	*The purpose of this service method is to perform delete operation of  DataTransferLimit noun from  database based on given noun id
	*@param  id
	*@param user
	*@return the_DataTransferLimit id deleted based on id
	*@throws Exception
	*/

	public String  delete_datatransferlimit(String id ) throws Exception {

 		  log.setLevel(Level.INFO);
	      log.info("delete_datatransferlimit service operation started !");

		try{
			String method_return_message;

			method_return_message = DataTransferLimit_dao.delete_datatransferlimit(id);

 			log.info(" Object returned from delete_datatransferlimit  service method !");
			return method_return_message;

		}catch(Exception e){

			System.out.println("ServiceException: " + e.toString());
			log.error("delete_datatransferlimit service throws exception : "+ e.toString());

		}
		return null;



	}

	//auths not ready at this time

	/**
	*
	*The purpose of this service method is to get list of  DataTransferLimit noun from  database
	*
	*
	*@return List of DataTransferLimit object will return
	*@throws Exception
	*/

	public ArrayList<DataTransferLimit> get_all_datatransferlimit() throws Exception {

 		  log.setLevel(Level.INFO);
	      log.info(" service operation started !");

		try{
			ArrayList<DataTransferLimit> DataTransferLimit_list;

			DataTransferLimit_list = DataTransferLimit_dao.get_all_datatransferlimit();

 			log.info(" Object returned from   service method !");
			return DataTransferLimit_list;

		}catch(Exception e){

			System.out.println("ServiceException: " + e.toString());
			log.error(" service throws exception : "+ e.toString());

		}
		return null;



	}




}