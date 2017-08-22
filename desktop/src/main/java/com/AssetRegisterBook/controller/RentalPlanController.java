package com.AssetRegisterBook.controller;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.apache.log4j.*;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestBody;

import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;
import com.wordnik.swagger.annotations.ApiParam;
import com.wordnik.swagger.annotations.ApiResponse;
import com.wordnik.swagger.annotations.ApiResponses;


import com.AssetRegisterBook.domain.core.RentalPlan;

import com.AssetRegisterBook.config.AssetRegisterBookSwaggerUIConstants;

import com.AssetRegisterBook.service.RentalPlanService;



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

@Api(value = "/api/RentalPlan", description = "RentalPlan of RentalPlan",produces = "application/json")
@CrossOrigin
@Controller("RentalPlanController")
@RequestMapping("/api/RentalPlan")
public class RentalPlanController  implements AssetRegisterBookSwaggerUIConstants {

private static Logger log = Logger.getLogger(RentalPlanController.class.getName());

 


	private RentalPlanService RentalPlan_service;


	public RentalPlanService get_RentalPlan_service() {
		return RentalPlan_service;
	}


	@Resource(name="RentalPlanService")
	public void set_RentalPlan_service(RentalPlanService RentalPlan_service) {
		this.RentalPlan_service = RentalPlan_service;
	}




	//auths not ready at this time
	/**
	*The purpose of this method is to perform save operation of  RentalPlan noun into database
	* @param the_RentalPlan
	*@return RentalPlan object will return for mongo
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/create_RentalPlan", httpMethod = "POST",notes = "creates a noun of RentalPlan",response = RentalPlan.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.POST,value = "/create_RentalPlan" ,headers="Accept=application/json")
    @ResponseBody
	public RentalPlan create_RentalPlan(@RequestBody RentalPlan the_RentalPlan) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("create_RentalPlan controller started operation!");

		the_RentalPlan.setId(null);

		RentalPlan a_RentalPlan = RentalPlan_service.create_rentalplan(the_RentalPlan);

		log.info("Object returned from create_RentalPlan method !");

 

        return a_RentalPlan;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform update operation of  RentalPlan noun into database
	*@param the_RentalPlan
	*@return RentalPlanobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/update_RentalPlan", httpMethod = "PUT",notes = "updates a noun of RentalPlan",response = RentalPlan.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.PUT,value = "/update_RentalPlan" ,headers="Accept=application/json")
    @ResponseBody
	public RentalPlan update_RentalPlan(@RequestBody RentalPlan the_RentalPlan) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("update_RentalPlan controller started operation!");

		RentalPlan a_RentalPlan;

		a_RentalPlan = RentalPlan_service.update_rentalplan(the_RentalPlan);

		log.info("Object returned from update_RentalPlan method !");

 

        return a_RentalPlan;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform fetch operation of  RentalPlan noun from  database based on given noun id
	*@param RentalPlan_id
	*@return RentalPlanobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/search_for_update_RentalPlan/{RentalPlan_id}", httpMethod = "GET",notes = "updates a noun of RentalPlan",response = RentalPlan.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.GET,value = "/search_for_update_RentalPlan/{RentalPlan_id}" ,headers="Accept=application/json")
    @ResponseBody
	public RentalPlan search_for_update_RentalPlan(@PathVariable("RentalPlan_id")String RentalPlan_id) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("search_for_update_RentalPlan controller started operation!");

		RentalPlan the_RentalPlan = new RentalPlan();

		the_RentalPlan = RentalPlan_service.rentalplan_search_for_update(RentalPlan_id);

		log.info("Object returned from search_for_update_RentalPlan method !");

 

        return the_RentalPlan;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform delete operation of  RentalPlan noun from  database based on given noun id
	*@param RentalPlan_id
	*@return RentalPlanobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/delete_RentalPlan/{RentalPlan_id}", httpMethod = "DELETE",notes = "deletes a noun of RentalPlan",response = RentalPlan.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.DELETE,value = "/delete_RentalPlan/{RentalPlan_id}" ,headers="Accept=application/json")
    @ResponseBody
	public String  delete_RentalPlan(@PathVariable("RentalPlan_id")String  RentalPlan_id) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("delete_RentalPlan controller started operation!");

		String service_return_msg = "";

		service_return_msg = RentalPlan_service.delete_rentalplan(RentalPlan_id);

		log.info("Object returned from delete_RentalPlan method !");

 

        return service_return_msg;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to get list of  RentalPlan noun from  database
	*
	*@return List of RentalPlan objects will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/get_all_RentalPlan", httpMethod = "GET",notes = "special search that gets all values of RentalPlan",response = RentalPlan.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.GET,value = "/get_all_RentalPlan" ,headers="Accept=application/json")
    @ResponseBody
	public List<RentalPlan> get_all_RentalPlan() throws Exception {

		log.setLevel(Level.INFO);
	    log.info("get_all_RentalPlan controller started operation!");

		List<RentalPlan> RentalPlan_list = new ArrayList<RentalPlan>();

		RentalPlan_list = RentalPlan_service.get_all_rentalplan();

		log.info("Object returned from get_all_RentalPlan method !");

 

        return RentalPlan_list;

	}




}