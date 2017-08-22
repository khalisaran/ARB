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


import com.AssetRegisterBook.domain.core.Poentity;

import com.AssetRegisterBook.config.AssetRegisterBookSwaggerUIConstants;

import com.AssetRegisterBook.service.Poentity_ActivityService;



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

@Api(value = "/api/Poentity_Activity", description = "Poentity_Activity of Poentity_Activity",produces = "application/json")
@CrossOrigin
@Controller("Poentity_ActivityController")
@RequestMapping("/api/Poentity_Activity")
public class Poentity_ActivityController  implements AssetRegisterBookSwaggerUIConstants {

private static Logger log = Logger.getLogger(Poentity_ActivityController.class.getName());

 


	private Poentity_ActivityService Poentity_Activity_service;


	public Poentity_ActivityService get_Poentity_Activity_service() {
		return Poentity_Activity_service;
	}


	@Resource(name="Poentity_ActivityService")
	public void set_Poentity_Activity_service(Poentity_ActivityService Poentity_Activity_service) {
		this.Poentity_Activity_service = Poentity_Activity_service;
	}




	//auths not ready at this time
	/**
	*The purpose of this method is to perform save operation of  Poentity noun into database
	* @param the_Poentity
	*@return Poentity object will return for mongo
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/create_Poentity", httpMethod = "POST",notes = "creates a noun of Poentity",response = Poentity.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.POST,value = "/create_Poentity" ,headers="Accept=application/json")
    @ResponseBody
	public Poentity create_Poentity(@RequestBody Poentity the_Poentity) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("create_Poentity controller started operation!");

		the_Poentity.setId(null);

		Poentity a_Poentity = Poentity_Activity_service.create_poentity(the_Poentity);

		log.info("Object returned from create_Poentity method !");

 

        return a_Poentity;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform update operation of  Poentity noun into database
	*@param the_Poentity
	*@return Poentityobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/update_Poentity", httpMethod = "PUT",notes = "updates a noun of Poentity",response = Poentity.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.PUT,value = "/update_Poentity" ,headers="Accept=application/json")
    @ResponseBody
	public Poentity update_Poentity(@RequestBody Poentity the_Poentity) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("update_Poentity controller started operation!");

		Poentity a_Poentity;

		a_Poentity = Poentity_Activity_service.update_poentity(the_Poentity);

		log.info("Object returned from update_Poentity method !");

 

        return a_Poentity;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform fetch operation of  Poentity noun from  database based on given noun id
	*@param Poentity_id
	*@return Poentityobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/search_for_update_Poentity/{Poentity_id}", httpMethod = "GET",notes = "updates a noun of Poentity",response = Poentity.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.GET,value = "/search_for_update_Poentity/{Poentity_id}" ,headers="Accept=application/json")
    @ResponseBody
	public Poentity search_for_update_Poentity(@PathVariable("Poentity_id")String Poentity_id) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("search_for_update_Poentity controller started operation!");

		Poentity the_Poentity = new Poentity();

		the_Poentity = Poentity_Activity_service.poentity_search_for_update(Poentity_id);

		log.info("Object returned from search_for_update_Poentity method !");

 

        return the_Poentity;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform delete operation of  Poentity noun from  database based on given noun id
	*@param Poentity_id
	*@return Poentityobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/delete_Poentity/{Poentity_id}", httpMethod = "DELETE",notes = "deletes a noun of Poentity",response = Poentity.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.DELETE,value = "/delete_Poentity/{Poentity_id}" ,headers="Accept=application/json")
    @ResponseBody
	public String  delete_Poentity(@PathVariable("Poentity_id")String  Poentity_id) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("delete_Poentity controller started operation!");

		String service_return_msg = "";

		service_return_msg = Poentity_Activity_service.delete_poentity(Poentity_id);

		log.info("Object returned from delete_Poentity method !");

 

        return service_return_msg;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to get list of  Poentity noun from  database
	*
	*@return List of Poentity objects will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/get_all_Poentity", httpMethod = "GET",notes = "special search that gets all values of Poentity",response = Poentity.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.GET,value = "/get_all_Poentity" ,headers="Accept=application/json")
    @ResponseBody
	public List<Poentity> get_all_Poentity() throws Exception {

		log.setLevel(Level.INFO);
	    log.info("get_all_Poentity controller started operation!");

		List<Poentity> Poentity_list = new ArrayList<Poentity>();

		Poentity_list = Poentity_Activity_service.get_all_poentity();

		log.info("Object returned from get_all_Poentity method !");

 

        return Poentity_list;

	}




}