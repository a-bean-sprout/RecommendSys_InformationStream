package com.ocean.org.service;

import org.springframework.transaction.annotation.Transactional;

public interface InvertMidService {

    @Transactional
    void getAllUsers(String username,boolean ifOldUser);

    @Transactional
    String getMidsBytag(String sTag);

    @Transactional
    String getMidsByStag(String sTag);

    @Transactional
    String getMidsByTtag(String tTag);
}
