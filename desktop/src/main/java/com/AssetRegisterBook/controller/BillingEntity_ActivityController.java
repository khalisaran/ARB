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


import com.AssetRegisterBook.domain.core.BillingEntity;

import com.AssetRegisterBook.config.AssetRegisterBookSwaggerUIConstants;

import com.AssetRegisterBook.service.BillingEntity_ActivityService;



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

@Api(value = "/api/BillingEntity_Activity", description = "BillingEntity_Activity of BillingEntity_Activity",produces = "application/json")
@CrossOrigin
@Controller("BillingEntity_ActivityController")
@RequestMapping("/api/BillingEntity_Activity")
public class BillingEntity_ActivityController  implements AssetRegisterBookSwaggerUIConstants {

private static Logger log = Logger.getLogger(BillingEntity_ActivityController.class.getName());

 


	private BillingEntity_ActivityService BillingEntity_Activity_service;


	public BillingEntity_ActivityService get_BillingEntity_Activity_service() {
		return BillingEntity_Activity_service;
	}


	@Resource(name="BillingEntity_ActivityService")
	public void set_BillingEntity_Activity_service(BillingEntity_ActivityService BillingEntity_Activity_service) {
		this.BillingEntity_Activity_service = BillingEntity_Activity_service;
	}




	//auths not ready at this time
	/**
	*The purpose of this method is to perform save operation of  BillingEntity noun into database
	* @param the_BillingEntity
	*@return BillingEntity object will return for mongo
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/create_BillingEntity", httpMethod = "POST",notes = "creates a noun of BillingEntity",response = BillingEntity.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.POST,value = "/create_BillingEntity" ,headers="Accept=application/json")
    @ResponseBody
	public BillingEntity create_BillingEntity(@RequestBody BillingEntity the_BillingEntity) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("create_BillingEntity controller started operation!");

		the_BillingEntity.setId(null);

		BillingEntity a_BillingEntity = BillingEntity_Activity_service.create_billingentity(the_BillingEntity);

		log.info("Object returned from create_BillingEntity method !");

 

        return a_BillingEntity;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform update operation of  BillingEntity noun into database
	*@param the_BillingEntity
	*@return BillingEntityobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/update_BillingEntity", httpMethod = "PUT",notes = "updates a noun of BillingEntity",response = BillingEntity.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.PUT,value = "/update_BillingEntity" ,headers="Accept=application/json")
    @ResponseBody
	public BillingEntity update_BillingEntity(@RequestBody BillingEntity the_BillingEntity) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("update_BillingEntity controller started operation!");

		BillingEntity a_BillingEntity;

		a_BillingEntity = BillingEntity_Activity_service.update_billingentity(the_BillingEntity);

		log.info("Object returned from update_BillingEntity method !");

 

        return a_BillingEntity;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform fetch operation of  BillingEntity noun from  database based on given noun id
	*@param BillingEntity_id
	*@return BillingEntityobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/search_for_update_BillingEntity/{BillingEntity_id}", httpMethod = "GET",notes = "updates a noun of BillingEntity",response = BillingEntity.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.GET,value = "/search_for_update_BillingEntity/{BillingEntity_id}" ,headers="Accept=application/json")
    @ResponseBody
	public BillingEntity search_for_update_BillingEntity(@PathVariable("BillingEntity_id")String BillingEntity_id) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("search_for_update_BillingEntity controller started operation!");

		BillingEntity the_BillingEntity = new BillingEntity();

		the_BillingEntity = BillingEntity_Activity_service.billingentity_search_for_update(BillingEntity_id);

		log.info("Object returned from search_for_update_BillingEntity method !");

 

        return the_BillingEntity;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform delete operation of  BillingEntity noun from  database based on given noun id
	*@param BillingEntity_id
	*@return BillingEntityobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/delete_BillingEntity/{BillingEntity_id}", httpMethod = "DELETE",notes = "deletes a noun of BillingEntity",response = BillingEntity.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.DELETE,value = "/delete_BillingEntity/{BillingEntity_id}" ,headers="Accept=application/json")
    @ResponseBody
	public String  delete_BillingEntity(@PathVariable("BillingEntity_id")String  BillingEntity_id) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("delete_BillingEntity controller started operation!");

		String service_return_msg = "";

		service_return_msg = BillingEntity_Activity_service.delete_billingentity(BillingEntity_id);

		log.info("Object returned from delete_BillingEntity method !");

 

        return service_return_msg;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to get list of  BillingEntity noun from  database
	*
	*@return List of BillingEntity objects will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/get_all_BillingEntity", httpMethod = "GET",notes = "special search that gets all values of BillingEntity",response = BillingEntity.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.GET,value = "/get_all_BillingEntity" ,headers="Accept=application/json")
    @ResponseBody
	public List<BillingEntity> get_all_BillingEntity() throws Exception {

		log.setLevel(Level.INFO);
	    log.info("get_all_BillingEntity controller started operation!");

		List<BillingEntity> BillingEntity_list = new ArrayList<BillingEntity>();

		BillingEntity_list = BillingEntity_Activity_service.get_all_billingentity();

		log.info("Object returned from get_all_BillingEntity method !");

 

        return BillingEntity_list;

	}




}