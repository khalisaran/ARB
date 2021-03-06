package com.AssetRegisterBook.service;

import java.util.ArrayList;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import org.apache.log4j.*;



import com.AssetRegisterBook.domain.core.RentalPlan;

import com.AssetRegisterBook.dao.couchbase.RentalPlanDao;



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
@Service("RentalPlanService")
public class RentalPlanService   {
private static Logger log = Logger.getLogger(RentalPlanService.class.getName());

	private RentalPlanDao RentalPlan_dao;


	public RentalPlanDao get_RentalPlan_dao() {
		return RentalPlan_dao;
	}


	@Resource(name="RentalPlanDao")
	public void set_RentalPlan_dao(RentalPlanDao RentalPlan_dao) {
		this.RentalPlan_dao = RentalPlan_dao;
	}



	//auths not ready at this time

	/**
	*
	*The purpose of this service method is to perform save operation of  RentalPlan noun into database
	*@param RentalPlan
	*@param user
	*@return the_RentalPlan object will return
	*@throws Exception
	*/

	public RentalPlan create_rentalplan(RentalPlan RentalPlan) throws Exception {

 		  log.setLevel(Level.INFO);
	      log.info("create_rentalplan service operation started !");

		try{
			RentalPlan the_RentalPlan;

			the_RentalPlan = RentalPlan_dao.create_rentalplan(RentalPlan);

 			log.info(" Object returned from create_rentalplan  service method !");
			return the_RentalPlan;

		}catch(Exception e){

			System.out.println("ServiceException: " + e.toString());
			log.error("create_rentalplan service throws exception : "+ e.toString());

		}
		return null;



	}

	//auths not ready at this time

	/**
	*
	*The purpose of this service method is to perform update operation of  RentalPlan noun into database
	*@param RentalPlan
	*@param user
	*@return the_RentalPlan object will return
	*@throws Exception
	*/

	public RentalPlan update_rentalplan(RentalPlan RentalPlan) throws Exception {

 		  log.setLevel(Level.INFO);
	      log.info("update_rentalplan service operation started !");

		try{
			RentalPlan the_RentalPlan;

			the_RentalPlan = RentalPlan_dao.update_rentalplan(RentalPlan);

 			log.info(" Object returned from update_rentalplan  service method !");
			return the_RentalPlan;

		}catch(Exception e){

			System.out.println("ServiceException: " + e.toString());
			log.error("update_rentalplan service throws exception : "+ e.toString());

		}
		return null;



	}

	//auths not ready at this time

	/**
	*
	*The purpose of this service method is to perform fetch operation of  RentalPlan noun from  database based on given noun id
	*@param  id
	*@param user
	*@return the_RentalPlan object will return
	*@throws Exception
	*/

	public RentalPlan rentalplan_search_for_update(String id ) throws Exception {

 		  log.setLevel(Level.INFO);
	      log.info("rentalplan_search_for_update service operation started !");

		try{
			RentalPlan the_RentalPlan;

			the_RentalPlan = RentalPlan_dao.rentalplan_search_for_update(id);

 			log.info(" Object returned from rentalplan_search_for_update  service method !");
			return the_RentalPlan;

		}catch(Exception e){

			System.out.println("ServiceException: " + e.toString());
			log.error("rentalplan_search_for_update service throws exception : "+ e.toString());

		}
		return null;



	}

	//auths not ready at this time

	/**
	*
	*The purpose of this service method is to perform delete operation of  RentalPlan noun from  database based on given noun id
	*@param  id
	*@param user
	*@return the_RentalPlan id deleted based on id
	*@throws Exception
	*/

	public String  delete_rentalplan(String id ) throws Exception {

 		  log.setLevel(Level.INFO);
	      log.info("delete_rentalplan service operation started !");

		try{
			String method_return_message;

			method_return_message = RentalPlan_dao.delete_rentalplan(id);

 			log.info(" Object returned from delete_rentalplan  service method !");
			return method_return_message;

		}catch(Exception e){

			System.out.println("ServiceException: " + e.toString());
			log.error("delete_rentalplan service throws exception : "+ e.toString());

		}
		return null;



	}

	//auths not ready at this time

	/**
	*
	*The purpose of this service method is to get list of  RentalPlan noun from  database
	*
	*
	*@return List of RentalPlan object will return
	*@throws Exception
	*/

	public ArrayList<RentalPlan> get_all_rentalplan() throws Exception {

 		  log.setLevel(Level.INFO);
	      log.info(" service operation started !");

		try{
			ArrayList<RentalPlan> RentalPlan_list;

			RentalPlan_list = RentalPlan_dao.get_all_rentalplan();

 			log.info(" Object returned from   service method !");
			return RentalPlan_list;

		}catch(Exception e){

			System.out.println("ServiceException: " + e.toString());
			log.error(" service throws exception : "+ e.toString());

		}
		return null;



	}




}