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


import com.AssetRegisterBook.domain.core.Identity;

import com.AssetRegisterBook.config.AssetRegisterBookSwaggerUIConstants;

import com.AssetRegisterBook.service.Identity_ActivityService;



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

@Api(value = "/api/Identity_Activity", description = "Identity_Activity of Identity_Activity",produces = "application/json")
@CrossOrigin
@Controller("Identity_ActivityController")
@RequestMapping("/api/Identity_Activity")
public class Identity_ActivityController  implements AssetRegisterBookSwaggerUIConstants {

private static Logger log = Logger.getLogger(Identity_ActivityController.class.getName());

 


	private Identity_ActivityService Identity_Activity_service;


	public Identity_ActivityService get_Identity_Activity_service() {
		return Identity_Activity_service;
	}


	@Resource(name="Identity_ActivityService")
	public void set_Identity_Activity_service(Identity_ActivityService Identity_Activity_service) {
		this.Identity_Activity_service = Identity_Activity_service;
	}




	//auths not ready at this time
	/**
	*The purpose of this method is to perform save operation of  Identity noun into database
	* @param the_Identity
	*@return Identity object will return for mongo
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/create_Identity", httpMethod = "POST",notes = "creates a noun of Identity",response = Identity.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.POST,value = "/create_Identity" ,headers="Accept=application/json")
    @ResponseBody
	public Identity create_Identity(@RequestBody Identity the_Identity) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("create_Identity controller started operation!");

		the_Identity.setid(null);

		Identity a_Identity = Identity_Activity_service.create_identity(the_Identity);

		log.info("Object returned from create_Identity method !");

 

        return a_Identity;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform update operation of  Identity noun into database
	*@param the_Identity
	*@return Identityobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/update_Identity", httpMethod = "PUT",notes = "updates a noun of Identity",response = Identity.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.PUT,value = "/update_Identity" ,headers="Accept=application/json")
    @ResponseBody
	public Identity update_Identity(@RequestBody Identity the_Identity) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("update_Identity controller started operation!");

		Identity a_Identity;

		a_Identity = Identity_Activity_service.update_identity(the_Identity);

		log.info("Object returned from update_Identity method !");

 

        return a_Identity;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform fetch operation of  Identity noun from  database based on given noun id
	*@param Identity_id
	*@return Identityobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/search_for_update_Identity/{Identity_id}", httpMethod = "GET",notes = "updates a noun of Identity",response = Identity.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.GET,value = "/search_for_update_Identity/{Identity_id}" ,headers="Accept=application/json")
    @ResponseBody
	public Identity search_for_update_Identity(@PathVariable("Identity_id")String Identity_id) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("search_for_update_Identity controller started operation!");

		Identity the_Identity = new Identity();

		the_Identity = Identity_Activity_service.identity_search_for_update(Identity_id);

		log.info("Object returned from search_for_update_Identity method !");

 

        return the_Identity;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform delete operation of  Identity noun from  database based on given noun id
	*@param Identity_id
	*@return Identityobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/delete_Identity/{Identity_id}", httpMethod = "DELETE",notes = "deletes a noun of Identity",response = Identity.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.DELETE,value = "/delete_Identity/{Identity_id}" ,headers="Accept=application/json")
    @ResponseBody
	public String  delete_Identity(@PathVariable("Identity_id")String  Identity_id) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("delete_Identity controller started operation!");

		String service_return_msg = "";

		service_return_msg = Identity_Activity_service.delete_identity(Identity_id);

		log.info("Object returned from delete_Identity method !");

 

        return service_return_msg;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to get list of  Identity noun from  database
	*
	*@return List of Identity objects will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/get_all_Identity", httpMethod = "GET",notes = "special search that gets all values of Identity",response = Identity.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.GET,value = "/get_all_Identity" ,headers="Accept=application/json")
    @ResponseBody
	public List<Identity> get_all_Identity() throws Exception {

		log.setLevel(Level.INFO);
	    log.info("get_all_Identity controller started operation!");

		List<Identity> Identity_list = new ArrayList<Identity>();

		Identity_list = Identity_Activity_service.get_all_identity();

		log.info("Object returned from get_all_Identity method !");

 

        return Identity_list;

	}




}