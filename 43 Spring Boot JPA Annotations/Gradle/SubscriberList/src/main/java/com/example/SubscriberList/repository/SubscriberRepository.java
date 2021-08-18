package com.example.SubscriberList.repository;

import com.example.SubscriberList.model.Subscriber;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubscriberRepository extends CrudRepository<Subscriber, Long> {

}
